import { insertLoading } from "./loading";

export const insertWeather = () => {
  let weatherCityElement = document.getElementById("weather-city");
  let weatherTemperatureElement = document.getElementById(
    "weather-temperature"
  );
  let weatherContainerElement = document.getElementById("weather-container");
  let loaderElement;

  const buildLoading = () => {
    if (!weatherContainerElement) return;

    loaderElement = insertLoading(weatherContainerElement);
    loaderElement.buildElement();
  };

  const dismissLoading = () => {
    if (!weatherContainerElement) return;
    loaderElement.dismissElement();
  };

  const buildElement = (weatherData) => {
    if (!weatherData)
      throw new Error("Weather data is mandatory in insert weather element");

    weatherTemperatureElement.textContent = `${weatherData.temperature} °C`;
    weatherCityElement.textContent = weatherData.city;
  };

  return {
    buildLoading,
    dismissLoading,
    buildElement,
  };
};
