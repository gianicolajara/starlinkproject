/**
 * Listen for window online and offline events.
 */
export const detectOnline = ({
  onOnline,
  onOffline,
  initialOffline,
  initialOnline,
}) => {
  let online;

  online ??= navigator.onLine;

  if (!online) {
    initialOffline?.();
  } else {
    initialOnline?.();
  }

  //it is online
  window.addEventListener("online", () => {
    online = true;
    onOnline?.();
  });

  //it isn't online
  window.addEventListener("offline", () => {
    online = false;
    onOffline?.();
  });

  return {
    isOnline: online,
  };
};
