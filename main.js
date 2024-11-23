import { storage } from "./src/scripts/lib/storage.js";
import { detectOnline } from "./src/scripts/lib/online.js";
import { geolocation } from "./src/scripts/lib/geolocation.js";

//data imports
import { products } from "./src/data/products.js";
import { pricesTable } from "./src/data/pricesTable.js";
import { prices } from "./src/data/prices.js";

//components imports
import { insertLocation } from "./src/scripts/components/location.js";
import { insertButton } from "./src/scripts/components/button.js";
import { insertButtonTextIcon } from "./src/scripts/components/buttonTextIcon.js";
import { insertProducts } from "./src/scripts/components/products.js";
import { insertSmall } from "./src/scripts/components/small.js";
import { insertPrices } from "./src/scripts/components/prices.js";
import { insertPricesTable } from "./src/scripts/components/pricesTable.js";

//events imports
import { menuEvents } from "./src/scripts/events/menu.js";
import { resizeEvents } from "./src/scripts/events/resize.js";
import { heroeEvents } from "./src/scripts/events/heroe.js";
import { scrollEvents } from "./src/scripts/events/scroll.js";

//storage imports
import { storageKeys } from "./src/config/storage.js";
import { weatherHelper } from "./src/scripts/lib/weather.js";

//libraries
import "toastify-js/src/toastify.css";
import { toast } from "./src/scripts/lib/toast.js";
import { handleSetupLocationElement } from "./src/scripts/lib/setupLocation.js";

//events
import { newsletterEvents } from "./src/scripts/events/newsletter.js";
import { orderNowEvents } from "./src/scripts/events/orderNow.js";
import { videoEvents } from "./src/scripts/events/video.js";
import { modalEvents } from "./src/scripts/events/modal.js";
import { darkModeEvents } from "./src/scripts/events/darkMode.js";

const initApp = async () => {
  const geolocationContainerElement = document.getElementById("geo-data");

  //init storage
  const store = storage();
  const t = toast();

  //get local storage country variable
  const storeAddressItem = store.get(storageKeys.country);
  const storeWeatherItem = store.get(storageKeys.weather);

  //init weather
  const weatherApi = weatherHelper(store, t);
  weatherApi.getData({
    address: storeAddressItem,
    stored: storeWeatherItem,
  });

  //init all events
  const modalEventsHandlers = modalEvents();
  const productElements = insertProducts(products);
  const menuEventsHandlers = menuEvents();
  const resizeEventsHandlers = resizeEvents();
  const heroeEventsHandlers = heroeEvents();
  const scrollEventsHandlers = scrollEvents();
  const videoEventsHandlers = videoEvents();
  const darkModeEventsHandlers = darkModeEvents(store);
  const newsletterHandlers = newsletterEvents(t);
  const orderNowHandlers = orderNowEvents(t, store);

  //build all events
  productElements.buildElement();
  menuEventsHandlers.buildEvents();
  resizeEventsHandlers.buildEvents();
  heroeEventsHandlers.buildEvents();
  scrollEventsHandlers.buildEvents();
  videoEventsHandlers.buildEvents();
  modalEventsHandlers.buildEvents();
  darkModeEventsHandlers.buildEvents();
  newsletterHandlers.buildEvents();

  //init geolocation api
  const { init: initGeolocation } = geolocation({
    isCached: !!storeAddressItem,
    toast: t,
  });

  //init components

  //here we start calling the order button methods now
  const buyNowButtonElement = insertButton({
    fatherElement: geolocationContainerElement,
    id: "order-now-button",
    events: orderNowHandlers.buildEvents,
  });

  //here we initiate the call to the user's location text methods
  const locationTextElement = insertLocation(geolocationContainerElement);

  //here we start calling the text methods to help the user know what the locate button is for
  const locationSmallTextElement = insertSmall({
    fatherElement: geolocationContainerElement,
    text: "Tell us where you are located and we will give you an offer",
    id: "location-small-text",
    description: "this is a box explaining why we need your current location",
  });

  //here we start calling the geolocation button methods now
  const geolocationButtonElement = insertButtonTextIcon({
    fatherElement: geolocationContainerElement,
    text: "Find Your Location",
    icon: "fa-map-marker",
    description:
      "button to get your location and give you a personalized service",
    describeBy: "location-small-text",
    onClick: () => {
      try {
        //here we start to get the user's longitude and latitude
        initGeolocation(
          async (lat, long) => {
            // handles the setup of location elements based on geolocation data.
            await handleSetupLocationElement({
              lat,
              long,
              buyNowButtonElement,
              geolocationButtonElement,
              locationSmallTextElement,
              locationTextElement,
              store,
              storeAddressItem,
              toast: t,
            });

            //we obtain the weather data for the place where the user lives
            if (!storeAddressItem) {
              await weatherApi.getData({
                address: store.get(storageKeys.country),
              });
            }
          },
          (error) => {
            locationTextElement.insertLocationError(error);
          }
        );
      } catch (error) {
        t.errorToast(
          `Something was wrong getting and setting location: ${error}`
        );
        geolocationButtonElement.stopLoadingElement();
      }
    },
  });

  //we insert the pricing elements and their respective table
  insertPrices(prices).buildElement();
  insertPricesTable(pricesTable).buildElement();

  //online/offline detection
  detectOnline({
    //callback function when the browser is online
    onOnline: async () => {
      locationTextElement.resetLocationText();
      geolocationButtonElement.buildElement();
      locationSmallTextElement.buildElement();
      t.infoToast("You are online");
    },
    //callback function when browser is offline
    onOffline: () => {
      locationTextElement.insertLocationOffline();
      geolocationButtonElement.dismissElement();
      buyNowButtonElement.dismissElement();
      locationSmallTextElement.dismissElement();
      t.errorToast("You are not online");
    },
    //callback function when the browser is offline at startup
    initialOffline: () => {
      locationTextElement.insertLocationOffline();
    },
    //callback function when the browser is online at startup
    initialOnline: () => {
      geolocationButtonElement.buildElement();
      locationSmallTextElement.buildElement();
    },
  });
};

//start everything when DOM loaded already
document.addEventListener("DOMContentLoaded", initApp);
