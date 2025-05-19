import { type FC, useMemo } from 'react';

type MinuteHandPropsType = {
  minute: number;
};

const MinuteHand: FC<MinuteHandPropsType> = ({ minute }) => {
  const minuteDeg = useMemo(() => (minute / 60) * 360, [minute]);

  return (
    <div
      className="after:h-9 after:rounded-bl-lg after:rounded-br-lg after:top-full after:w-full after:bg-inherit after:left-0 after:absolute absolute rounded-tl-lg rounded-tr-lg bg-primary-foreground h-1/4 left-1/2 top-1/2 -translate-1/2 -translate-y-full w-2 origin-bottom"
      style={{
        transform: `rotate(${minuteDeg}deg)`,
      }}
    />
  );
};

export default MinuteHand;
