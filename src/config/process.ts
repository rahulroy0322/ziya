const weatherUrl =
  import.meta.env.VITE_APP_WEATHER_URL ||
  'http://localhost:8000/api/v1/weather/';

export { weatherUrl };
