import {
  type ChangeEvent,
  type FC,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { cn } from '@/lib/utils';

type SyFySliderPropsType = {
  max: number;
  defaultValue?: number;
  min?: number;
  step?: number;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: number) => void;
};

const SyFySlider: FC<SyFySliderPropsType> = ({
  min = 0,
  max,
  step = 1,
  defaultValue = 0,
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);
  const [isDragging, setIsDragging] = useState(false);

  const width = useMemo(() => {
    const width = (value / max) * 100;
    return width;
  }, [max, value]);

  const onInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(e.target.value);
      setValue(value);
      onChange?.(value);
    },
    [onChange]
  );

  const onStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const onEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div className="isolate">
      <div className="flex flex-col gap-0.5">
        <div className="w-full bg-primary h-0.5 relative">
          <div
            className={cn(
              'bg-background border-primary border-t-2 border-l-2 -top-[170%] -translate-x-1/2 rotate-45 absolute duration-200 transition',
              {
                'size-2': !isDragging,
                'size-1.5': isDragging,
              }
            )}
            style={{
              left: `${width}%`,
            }}
          />
        </div>

        <div className="w-full border h-3 border-primary z-20 relative">
          <span
            className="block h-full bg-primary"
            style={{
              width: `${width}%`,
            }}
          />
          <input
            onMouseDown={onStart}
            onTouchStart={onStart}
            onMouseUp={onEnd}
            onTouchEnd={onEnd}
            value={value}
            onChange={onInput}
            min={min}
            max={max}
            step={step}
            type="range"
            className="z-50 cursor-pointer appearance-none absolute size-full top-0 left-0 right-0 bottom-0"
          />
        </div>

        <div className="w-full bg-primary h-0.5 relative">
          <div
            className={cn(
              'bg-background border-primary border-b-2 border-r-2 -translate-x-1/2 size-2 rotate-45 absolute duration-200 transition',
              {
                'size-2 -top-[135%]': !isDragging,
                'size-1.5 -top-[100%]': isDragging,
              }
            )}
            style={{
              left: `${width}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SyFySlider;
