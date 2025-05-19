import type { FC } from 'react';

const Styles: FC = () => {
  return (
    <>
      {' '}
      <span className="bg-pink-600 block border-r-2 border-secondary-foreground absolute h-full w-0 left-0 top-0" />
      <span className="bg-blue-600 block border-b-2 border-secondary-foreground absolute w-full left-0 top-0" />
      <span className="bg-pink-600 block border-l-2 border-secondary-foreground absolute h-full w-0 right-0 border-0" />
      <span className="bg-blue-600 block border-t-2 border-secondary-foreground absolute w-full left-0 bottom-0" />
      <span className="bg-background block border-2 border-r-0 border-secondary-foreground absolute h-1/6 w-3 right-0 top-5" />
      <span className="bg-background block border-r-2 border-secondary-foreground absolute h-5 w-3 rotate-45 -left-0.5 -top-1.5" />
      <span className="bg-background block border-r-2 border-secondary-foreground absolute h-5 w-3 -rotate-45 -left-0.5 -bottom-1.5" />
    </>
  );
};

export default Styles;
