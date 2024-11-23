//a function that allows me to create a fetch with a signal that has a timeout and allows me to set a timeout in case the page is blocked
export const fetchTimeout = async ({ url, time }) => {
  const controller = new AbortController();

  const promise = fetch(url, {
    signal: controller.signal,
    headers: {
      "content-type": "application/json",
    },
  });

  const timeout = setTimeout(() => controller.abort(), time);

  return promise.finally(() => clearTimeout(timeout));
};
