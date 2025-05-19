import { type FC } from 'react';

import { useDate } from '@/hooks';

const Time: FC = () => {
  const { date, month, day } = useDate();

  return (
    <div className="before:absolute before:size-8 before:bg-background before:-bottom-4 before:-left-4 before:rotate-45 after:absolute after:bg-background after:size-6 after:-top-3 after:-right-3 after:rotate-45 pl-10 pt-3 absolute uppercase text-right right-5 p-2 top-5 bg-secondary">
      <h2 className="text-5xl font-bold">{date}</h2>
      <p className="relative after:rotate-45 after:-bottom-2 after:-left-2 after:absolute after:bg-secondary after:h-4 after:aspect-square text-sm font-bold px-6 mt-1 bg-primary text-primary-foreground">
        {month}
      </p>
      <p className="text-xs text-secondary-foreground">{day}</p>
    </div>
  );
};

export default Time;
