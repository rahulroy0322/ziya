import { type FC, type ReactNode, useEffect, useState } from 'react';

import { useListen } from '@/hooks';
import { isListining } from '@/listen';

import { Checking, Error, type StatusType, canRun } from '.';

const useListenProps = {
  onListenChange(listining: boolean) {
    isListining.set(listining);
  },
};

type CheckAndRenderPropsType = {
  children: ReactNode;
};

const CheckAndRender: FC<CheckAndRenderPropsType> = ({ children }) => {
  const [status, setStatus] = useState<StatusType>(canRun.get());

  const { error, start, isListining } = useListen(useListenProps);

  useEffect(() => {
    return canRun.subscribe((canRun) => setStatus(canRun));
  }, []);

  useEffect(() => {
    if (!isListining && status === 'idal') {
      start()
    }
  }, [isListining, start, status]);

  if (error) {
    return <Error error={error} />;
  }
  if (status === 'error') {
    return <Error error={'voice not found,plaese try using chrome'} />;
  }
  if (status === 'checking') {
    return <Checking />;
  }
  return children;
};

export default CheckAndRender;
