import { useEffect, useState } from 'react';

const useClock = () => {
  const [time, setTime] = useState(new Date());

  const second = time.getSeconds();
  const minute = time.getMinutes();
  const hour = time.getHours();

  useEffect(() => {
    let t2: NodeJS.Timeout | null = null;
    const t1 = setInterval(() => {
      const newTime = new Date();
      if (time.getSeconds() !== newTime.getSeconds()) {
        clearInterval(t1);
        t2 = setInterval(() => setTime(new Date()), 1000);
      }
    }, 1);

    return () => {
      clearInterval(t1);
      if (t2) {
        clearInterval(t2);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    second,
    minute,
    hour,
  };
};
export default useClock;
