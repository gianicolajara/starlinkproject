//api about user's address

import { fetchTimeout } from "../lib/fetchTimeout";

export const nominatimService = async (lat, long) => {
  const res = await fetchTimeout({
    url: `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`,
    time: 10000,
  });

  if (!res.ok) {
    throw new Error("Error getting data from nominatim service");
  }

  const json = await res.json();

  return json;
};
