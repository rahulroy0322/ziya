import { type FC, useEffect } from 'react';

import { weatherUrl } from '@/config';
import { useIsMobile } from '@/hooks';
import { updateWeather, useWeaher } from '@/store';

import { Humidity, Pressure, Weather, Wind } from '.';

type WeatherResponseType = {
  location: string;
  weather: string;
  temperature: {
    feelsLike: number;
    min: number;
    max: number;
  };
  wind: {
    speed: string;
    direction: string;
  };
  visibility: string;
  pressure: number;
  humidity: number;
  dewPoint: number;
};

const DesktopOnly: FC = () => {
  const isMobile = useIsMobile();

  const lastUpdateDate = useWeaher(({ lastUpdateTime }) =>
    new Date(lastUpdateTime).getDate()
  );

  useEffect(() => {
    const abortController = new AbortController();
    const current = new Date();

    const fetchWeatherData = async () => {
      const res = await fetch(weatherUrl, {
        signal: abortController.signal,
      });

      if (!res.ok) {
        console.error('TODO: useWeather');
        return;
      }

      const {
        temperature: { feelsLike, min, max },
        wind: { speed, direction },
        ...data
      } = (await res.json()) as WeatherResponseType;

      updateWeather({
        ...data,
        direction,
        feelsLike,
        max,
        min,
        speed,
      });
    };

    if (current.getDate() !== lastUpdateDate) {
      fetchWeatherData();
    }

    return () => {
      abortController.abort();
    };
  }, [lastUpdateDate]);

  if (isMobile) {
    return null;
  }

  return (
    <>
      <Weather />
      <Wind />
      <Humidity />
      <Pressure />
      {/*<Tasks />
      <Events />
      */}
    </>
  );
};

export default DesktopOnly;
