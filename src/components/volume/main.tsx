import { type ChangeEvent, type FC, useCallback, useState } from 'react';

import { Segmentes, Styles } from '.';

type SyFyVolumePropsType = {
  max?: number;
  defaultValue?: number;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: number) => void;
};

const SyFyVolume: FC<SyFyVolumePropsType> = ({
  onChange,
  defaultValue = 0,
  max = 1,
}) => {
  const [value, setValue] = useState(defaultValue);

  const onInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(e.target.value);
      setValue(value);
      onChange?.(value);
    },
    [onChange]
  );

  return (
    <div className="bg-accent absolute flex flex-col h-[50vh] w-6 right-1 top-1/2 -translate-1/2">
      <Styles />

      <div className="flex flex-col-reverse gap-[1px] w-full h-full">
        <Segmentes
          value={value * 100}
          max={max * 100}
        />
      </div>

      <input
        min={0}
        onChange={onInput}
        value={value}
        step={0.1}
        max={max}
        type="range"
        className="z-40 appearance-none cursor-pointer -translate-1/2 -rotate-90 absolute h-20 w-[60vh] top-1/2 left-1/2"
      />
    </div>
  );
};

export default SyFyVolume;
