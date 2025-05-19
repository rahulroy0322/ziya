import type { FC } from 'react';

import { useWeaher } from '@/store';

const Weather: FC = () => {
  const {
    location: place,
    weather,
    min,
    max,
    feelsLike,
    dewPoint,
    visibility,
  } = useWeaher((state) => state.weather);

  return (
    <div className="px-5 py-3 flex flex-col gap-1 absolute top-1/2 left-3 -translate-y-1/2 bg-secondary">
      <p className="flex gap-2">
        <b>Place</b> : <span className="capitalize text-red-500">{place}</span>
      </p>
      <p className="flex gap-2">
        <b>Weather</b> :{' '}
        <span className="capitalize text-red-500">{weather}</span>
      </p>
      <p className="flex gap-2">
        <b>Temperature</b> :{' '}
        <span className="capitalize text-red-500">
          {min} / {max} °C
        </span>
      </p>
      <p className="flex gap-2">
        <b>Feels Like</b> :{' '}
        <span className="capitalize text-red-500">{feelsLike} °C</span>
      </p>
      <p className="flex gap-2">
        <b>Dew Point</b> :{' '}
        <span className="capitalize text-red-500">{dewPoint} °C</span>
      </p>
      <p className="flex gap-2">
        <b>Visibility </b> :{' '}
        <span className="capitalize text-red-500">{visibility}</span>
      </p>
    </div>
  );
};

export default Weather;
