import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type WeatherType = {
  location: string;
  weather: string;
  feelsLike: number;
  min: number;
  max: number;
  speed: string;
  direction: string;
  visibility: string;
  pressure: number;
  humidity: number;
  dewPoint: number;
};

const defaultWeatherData = {
  location: 'unknown',
  weather: 'unkonwn',
  feelsLike: 0,
  min: 0,
  max: 0,
  speed: 'unknown',
  direction: 'unknown',
  visibility: 'unknown',
  pressure: 0,
  humidity: 0,
  dewPoint: 0,
} satisfies WeatherType;

type StoreType = {
  lastUpdateTime: Date;
  weather: WeatherType;
  //updateWeather: (weather: WeatherType) => void
};

const defaultDate = new Date(2025, 1, 1, 1, 1, 1, 1);

const useWeaher = create<StoreType>()(
  persist(
    () => ({
      lastUpdateTime: defaultDate,
      weather: defaultWeatherData,
    }),
    {
      name: 'weather-data',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

const updateWeather = (weather: WeatherType) => {
  useWeaher.setState({
    lastUpdateTime: new Date(),
    weather,
  });
};

export { useWeaher, updateWeather };
