//api about user's weather

import { fetchTimeout } from "../lib/fetchTimeout";

export const weatherService = async (query) => {
  const res = await fetchTimeout({
    url: `https://api.weatherapi.com/v1/current.json?q=${query}&key=${
      import.meta.env.VITE_WEATHER_KEY
    }`,
    time: 10000,
  });

  if (!res.ok) {
    throw new Error("Error getting data from weather service");
  }

  const json = await res.json();
  return json;
};
