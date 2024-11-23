/**
 * Geolocation class
 */
export const geolocation = ({ isCached, toast }) => {
  let long, lat;

  //in this method we are going to start searching for the user's location
  const init = (callback, onError) => {
    //if it is cached in localstorage we won't need the data from api
    if (isCached) {
      callback();
      return;
    }

    try {
      //get current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (position?.coords) {
            lat = position.coords.latitude;
            long = position.coords.longitude;
          }

          callback(lat, long);
        },
        onError,
        {
          enableHighAccuracy: true,
        }
      );

      return { lat, long };
    } catch (error) {
      toast.errorToast(`Error in geolocation: ${error}`);
      onError(error);
    }
  };

  return {
    init,
  };
};
