import type { FC } from 'react';

import { Brain, Os } from '@/icons';

import pkg from '../../package.json';

const { version } = pkg;

const Ziya: FC = () => {
  return (
    <div className="flex items-start">
      <div className="bg-background p-2 z-10 flex items-center justify-center size-28 rounded-full ring-4 ring-primary">
        <Brain className="text-primary fill-current" />
      </div>

      <div className="-ml-7 pl-12 ring-2 ring-current flex relative flex-col gap-2 p-2">
        <div className="bg-background aspect-square h-4 absolute -top-2 -left-2 rotate-45 border-r-2 border-primary" />
        <div className="bg-background aspect-square h-2 absolute -bottom-1 left-5 -rotate-45 border-r-2 border-primary" />

        <div className="bg-background h-6 w-3 rounded-tr-md rounded-br-md absolute -right-3 -top-0.5 border-t-2 border-r-2 border-b-2 border-primary" />

        <div className="bg-background h-6 w-3 rounded-tr-md rounded-br-md absolute -right-3 -bottom-3 border-t-2 border-r-2 border-b-2 border-primary" />

        <div className="bg-background h-3 w-16 rounded-br-md rounded-bl-md absolute -right-3 -bottom-3 border-l-2 border-r-2 border-b-2 border-primary" />

        <div className="flex justify-between gap-3">
          <div>
            <p className="text-xl font-bold">Z.I.Y.A</p>
            <p className="text-sm">ver {version}</p>
          </div>
          <div className="flex items-center justify-center rounded-md px-4">
            <Os className="fill-current size-7" />
          </div>
        </div>
        <p className="uppercase bg-primary-foreground px-1 text-xs">
          creator | rahul
        </p>
      </div>
    </div>
  );
};

export default Ziya;
