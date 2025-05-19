import { type FC } from 'react';

import { Hands, Ticks } from '.';

const Clock: FC = () => (
  <div className="relative size-full rounded-full flex items-center justify-center">
    <Ticks />
    <Hands />
    <div className="ring-4 ring-primary absolute rounded-full size-4 bg-background top-1/2 left-1/2 -translate-1/2" />
  </div>
);

export default Clock;
