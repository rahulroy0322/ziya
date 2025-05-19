import { type FC } from 'react';

import { cn } from '@/lib/utils';
import { useWeaher } from '@/store';

const directions = [
  { dir: 'e', r: 0 },
  { dir: 'se', r: 0 },
  { dir: 's', r: -90 },
  { dir: 'sw', r: -180 },
  { dir: 'w', r: -180 },
  { dir: 'nw', r: -180 },
  { dir: 'n', r: 90 },
  { dir: 'ne', r: 0 },
] as const;

type WindDirType = (typeof directions)[number]['dir'];

const getWindDir = (dir: string): WindDirType => {
  const formatedDir: WindDirType[] = [];
  dir = dir.toLowerCase();

  if (dir.includes('north')) {
    formatedDir.push('n');
  }
  if (dir.includes('south')) {
    formatedDir.push('s');
  }
  if (dir.includes('east')) {
    formatedDir.push('e');
  }
  if (dir.includes('west')) {
    formatedDir.push('w');
  }

  return formatedDir.join('') as WindDirType;
};

const Wind: FC = () => {
  const { direction, speed } = useWeaher((state) => state.weather);
  const windDir = getWindDir(direction);

  return (
    <div className="size-48 flex items-center justify-center rounded-full left-1/5 ring-2 ring-primary absolute">
      <div
        className={cn(
          'absolute duration-500 transition-all text-destructive bottom-[15%]',
          {
            'left-[60%] bottom-[25%]': windDir === 'w' || windDir === 'e',
          }
        )}
      >
        {speed}
      </div>

      <div className="size-3/5 ring-2 ring-inherit flex items-center justify-center rounded-full">
        <div className="size-3/5 ring-2 ring-inherit rounded-full" />
      </div>

      <div
        className={cn(
          'bg-primary h-3/4 w-2 absolute rounded-[50%_50%_0_0] duration-500 transition-transform',
          {
            'rotate-0': windDir === 'e',
            'rotate-180': windDir === 'w',
            'rotate-[270deg]': windDir === 'n',
            'rotate-90': windDir === 's',
            'rotate-45': windDir === 'se',
            'rotate-[135deg]': windDir === 'sw',
            'rotate-[225deg]': windDir === 'nw',
            'rotate-[315deg]': windDir === 'ne',
          }
        )}
      />

      <div className="bg-primary size-5 absolute rounded-full" />

      {directions.map(({ dir, r }, i) => (
        <div
          key={`direction-${dir}`}
          className="absolute h-full flex justify-center items-start"
          style={{
            transform: `rotate(${i * 45}deg)`,
          }}
        >
          <span
            style={{
              rotate: `${r}deg`,
            }}
            className="block uppercase"
          >
            {dir}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Wind;
