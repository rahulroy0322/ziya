import { type FC, useMemo } from 'react';

type SecondHandPropsType = {
  second: number;
};

const SecondHand: FC<SecondHandPropsType> = ({ second }) => {
  const secondDeg = useMemo(() => (second / 60) * 360, [second]);

  return (
    <div
      className="after:h-12 after:rounded-bl-lg after:rounded-br-lg after:top-full after:w-full after:bg-inherit after:left-0 after:absolute absolute rounded-tl-lg rounded-tr-lg bg-primary-foreground h-2/5 left-1/2 top-1/2 -translate-1/2 -translate-y-full w-1 origin-bottom"
      style={{
        transform: `rotate(${secondDeg}deg)`,
      }}
    />
  );
};

export default SecondHand;
