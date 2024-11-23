import { storageKeys } from "../../config/storage";
import { insertWeather } from "../components/weather";
import { weatherService } from "../services/weather";

//clousure to trim code in the main, this is in charge of displaying the weather in desktop and tablet mode.
export const weatherHelper = (store, toast) => {
  let weatherData;

  const { buildElement, buildLoading, dismissLoading } = insertWeather();

  const getData = async ({ address, stored }) => {
    buildLoading();

    //is the data is stored we won't need to call the api
    if (stored) {
      weatherData = stored;
      dismissLoading();
      buildElement(weatherData);
      return;
    }

    //if the address wasn't sent then we'll leave
    if (!address) {
      dismissLoading();
      return;
    }

    try {
      //weather api fetch
      const res = await weatherService(Object.values(address)?.join(", "));

      weatherData = {
        icon: res.current?.condition?.icon,
        temperature: res.current?.dewpoint_c,
        city: res.location?.name,
      };

      //save data in store
      store.save({
        key: storageKeys.weather,
        data: weatherData,
      });
    } catch (error) {
      toast.errorToast(`Error getting weather data: ${error}`);
    } finally {
      dismissLoading();
      //when all is ready, we can build the element weather
      buildElement(weatherData);
    }
  };

  return {
    getData,
  };
};
