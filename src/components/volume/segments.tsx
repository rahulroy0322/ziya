import { type FC, memo } from 'react';

import { cn } from '@/lib/utils';

type SegmentesPropsType = {
  max?: number;
  value: number;
};

const Segmentes: FC<SegmentesPropsType> = memo(({ value, max = 100 }) =>
  Array.from({ length: 20 }).map((_, i) => (
    <div
      key={i}
      className={cn(
        'h-[calc(100%/20)] w-full bg-gray-500 transition-colors duration-200',
        {
          'bg-primary': value >= ((i + 1) / 20) * max,
        }
      )}
    />
  ))
);

export default Segmentes;
