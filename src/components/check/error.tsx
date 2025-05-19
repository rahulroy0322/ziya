import type { FC } from 'react';

import { Info } from '@/icons';

type ErrorPropsType = {
  error: string;
};

const Error: FC<ErrorPropsType> = ({ error }) => (
  <div className="fixed flex items-center justify-center inset-0">
    <div className="text-destructive bg-destructive/15 p-8 relative rounded-md shadow flex flex-col gap-2 items-center justify-center">
      <Info className="size-5 absolute top-3 right-3" />
      <h3 className="font-extrabold text-4xl">ERROR!</h3>
      <p className="capitalize font-normal text-lg">{error}</p>
    </div>
  </div>
);

export default Error;
