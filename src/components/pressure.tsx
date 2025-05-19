import type { FC } from 'react';

import { useWeaher } from '@/store';

const Pressure: FC = () => {
  const { pressure } = useWeaher((state) => state.weather);

  return (
    <div className="after:bg-background after:top-0 after:left-0 after:absolute after:h-3 after:w-12 before:bg-background before:bottom-0 before:right-0 before:absolute before:h-3 before:w-8 absolute top-5 left-2/7 bg-secondary p-5 gap-2 inline-flex items-center justify-center">
      <span className="bg-background absolute block h-4 w-2 -top-2 rotate-45 left-12 z-20" />
      <span className="bg-background absolute block h-4 w-4 bottom-1 -rotate-45 -right-2" />
      <b>Pressure</b>:
      <span className="text-sm uppercase text-destructive">
        {pressure} mbar
      </span>
    </div>
  );
};

export default Pressure;
