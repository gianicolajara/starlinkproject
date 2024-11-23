import { storageKeys } from "../../config/storage";
import { nominatimService } from "../services/nominatim";

/**
 * Handles the setup of location elements based on geolocation data.
 *
 * This function retrieves and processes location data using latitude and longitude,
 * interacts with the geolocation button, and updates location display elements.
 * It saves the location data in local storage if it's not already stored.
 */
export const handleSetupLocationElement = async ({
  lat,
  long,
  geolocationButtonElement,
  storeAddressItem,
  store,
  locationSmallTextElement,
  locationTextElement,
  buyNowButtonElement,
  toast,
}) => {
  let addressData;

  //geolocation button loader activated
  geolocationButtonElement.loadingElement();

  //if latitude, longitude and there isn't stored country we'll need call the nominatim api
  if (lat && long && !storeAddressItem) {
    try {
      const res = await nominatimService(lat, long);

      addressData = {
        country: res.address?.country,
        state: res.address?.state,
        city: res.address?.county,
        suburb: res.address?.suburb,
      };
    } catch (error) {
      toast.errorToast(`Error getting data from nominatim service: ${error}`);
      geolocationButtonElement.stopLoadingElement();
      return;
    }

    //save data in localstorage
    store.save({
      key: storageKeys.country,
      data: addressData,
    });
  }

  //stop button loader and detroy button and small text
  geolocationButtonElement.stopLoadingElement();
  geolocationButtonElement.dismissElement();
  locationSmallTextElement.dismissElement();

  //insert data in location text element
  locationTextElement.insertLocationCountry(
    addressData?.country && addressData?.city
      ? `${Object.values(addressData)?.join(", ")}`
      : `${Object.values(storeAddressItem)?.join(", ")}`
  );

  //build buy now button
  buyNowButtonElement.buildElement();
};
