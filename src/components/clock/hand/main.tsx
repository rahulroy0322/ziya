import { type FC } from 'react';

import { useClock } from '@/hooks';

import { HourHand, MinuteHand, SecondHand } from '.';

const Hands: FC = () => {
  const { second, minute, hour } = useClock();

  return (
    <>
      <HourHand
        hour={hour}
        minute={minute}
      />
      <MinuteHand minute={minute} />
      <SecondHand second={second} />
    </>
  );
};

export default Hands;
