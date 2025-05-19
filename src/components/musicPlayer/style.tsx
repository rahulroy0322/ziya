import type { FC } from 'react';

const Styles: FC = () => (
  <>
    <span className="block absolute -right-1 -top-1 size-5 border-t-2 border-r-2 border-primary" />
    <span className="block absolute -right-1 -bottom-1 size-5 border-b-2 border-r-2 border-primary" />
    <span className="block absolute -left-1 -top-1 size-5 border-t-2 border-l-2 border-primary" />
    <span className="block absolute -left-1 -bottom-1 size-5 border-b-2 border-l-2 border-primary" />
  </>
);

export default Styles;
