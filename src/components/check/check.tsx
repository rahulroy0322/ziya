import type { FC } from 'react';

const Checking: FC = () => (
  <div className="fixed flex items-center justify-center inset-0">
    <div className="bg-cyan-300/20 text-primary p-8 relative rounded-md shadow flex flex-col gap-2 items-center justify-center">
      <div className="animate-spin border-2 border-t-transparent border-primary rounded-full size-5 absolute right-3 top-3" />
      <h3 className="uppercase font-extrabold text-4xl">Checking</h3>
      <p className="capitalize font-black text-lg">please wait patiently</p>
    </div>
  </div>
);

export default Checking;
