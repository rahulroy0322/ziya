import type { FC, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type ActionButtonPropsType = {
  children: ReactNode;
  active?: boolean;
};

const ActionButton: FC<ActionButtonPropsType> = ({
  children,
  active = false,
}) => (
  <button
    className={cn('outline size-4 cursor-pointer', {
      'hover:bg-primary hover:text-primary-foreground': !active,
      'bg-primary text-primary-foreground': active,
    })}
  >
    {' '}
    {children}
  </button>
);

export default ActionButton;
