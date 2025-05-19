import { type FC, useMemo } from 'react';

type HourHandPropsType = {
  hour: number;
  minute: number;
};

const HourHand: FC<HourHandPropsType> = ({ minute, hour }) => {
  const hourDeg = useMemo(
    () => ((hour % 12) / 12) * 360 + (minute / 60) * 30,
    [hour, minute]
  );

  return (
    <div
      className="after:h-6 after:rounded-bl-lg after:rounded-br-lg after:top-full after:w-full after:bg-inherit after:left-0 after:absolute absolute rounded-tl-lg rounded-tr-lg bg-primary h-1/5 left-1/2 top-1/2 -translate-1/2 -translate-y-full w-2 origin-bottom"
      style={{
        transform: `rotate(${hourDeg}deg)`,
      }}
    />
  );
};

export default HourHand;
