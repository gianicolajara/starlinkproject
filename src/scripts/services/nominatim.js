//api about user's address

export const nominatimService = async (lat, long) => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`,
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Error getting data from nominatim service");
  }

  const json = await res.json();

  return json;
};
