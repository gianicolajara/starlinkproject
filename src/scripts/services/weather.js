//api about user's weather

export const weatherService = async (query) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?q=${query}&key=${
      import.meta.env.VITE_WEATHER_KEY
    }`,
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Error getting data from weather service");
  }

  const json = await res.json();
  return json;
};
