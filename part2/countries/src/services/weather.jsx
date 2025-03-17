import axios from "axios";
const baseUrl = "https://api.openweathermap.org/data/2.5";
// See https://vite.dev/guide/env-and-mode
// See https://home.openweathermap.org/api_keys
const apiKey = import.meta.env.VITE_OPENWEATHERMAP_KEY;
const units = "metric";
// lang = "en"

// See https://openweathermap.org/current
const getWeather = (lat, lon) => {
  const fullUrl = `${baseUrl}/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  return axios.get(fullUrl).then((response) => response.data);
};

// Does not need an api key
// See https://openweathermap.org/weather-conditions
const getImageUrl = (icon) => {
  const baseUrlImg = "https://openweathermap.org/img/wn";
  return `${baseUrlImg}/${icon}@2x.png`;
};

export default { getWeather, getImageUrl };
