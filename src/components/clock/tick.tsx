import { type FC } from 'react';

import { cn } from '@/lib/utils';

const Ticks: FC = () => (
  <>
    {Array.from({
      length: 60,
    }).map((_, i) => (
      <div
        key={`tick-${i}`}
        className={cn(
          'absolute h-full after:top-0 after:left-0 after:translate-x-1/2 after:absolute after:bg-primary after:w-1 after:h-5',
          {
            'after:h-12': i % 5 === 0,
            'after:w-1.5': i % 15 === 0,
          }
        )}
        style={{
          transform: `rotate(${i * 6}deg)`,
        }}
      />
    ))}
  </>
);

export default Ticks;
