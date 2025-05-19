import { type FC, useMemo } from 'react';

import { cn } from '@/lib/utils';
import { useWeaher } from '@/store';

const Humidity: FC = () => {
  const { humidity } = useWeaher((state) => state.weather);

  const _humidity = useMemo(
    () => Math.min(-90 + 1.8 * humidity, 90),
    [humidity]
  );

  return (
    <div
      className={cn(
        'bg-background left-1/5 bottom-1/7 flex items-center justify-center aspect-square w-60 absolute rounded-full'
      )}
    >
      {Array.from({
        length: 21,
      }).map((_, i) => (
        <div
          key={`tick-${i}`}
          className={cn(
            'absolute h-full before:top-0 after:left-0 after:translate-x-1/2 after:absolute after:bg-primary after:w-0.5 after:h-2.5',
            {
              'after:h-5': i % 2 === 0,
            }
          )}
          style={{
            transform: `rotate(${88 - i * 9}deg)`,
          }}
        />
      ))}
      <span
        className="after:w-[calc(100%+2px)] after:block after:-bottom-[1px] after:-left-[1px] after:absolute after:h-1/2 after:bg-background duration-500 absolute bg-destructive rounded-[50%_50%_0_0] block h-3/5 w-2"
        style={{
          transform: `rotate(${_humidity}deg)`,
        }}
      />
      <span className="absolute bg-primary rounded-full size-5 block" />

      <span className="z-50 mb-20 text-2xl font-bold">{humidity}%</span>
    </div>
  );
};

export default Humidity;
