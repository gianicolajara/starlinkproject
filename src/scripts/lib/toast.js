import Toastify from "toastify-js";

/**
 * Creates a toast object with info and error methods to display toast messages.
 */
export const toast = () => {
  const infoToast = (text) => {
    Toastify({
      text: text ?? "Nothing",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "bottom",
      position: "center",
      stopOnFocus: true,
    }).showToast();
  };

  const errorToast = (text) => {
    Toastify({
      text: text ?? "Nothing",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "bottom",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "#FA4032",
      },
    }).showToast();
  };

  return { infoToast, errorToast };
};
