import { storageKeys } from "../../config/storage";
import { insertOrderNowForm } from "../components/orderNowForm";
import { validateEmail } from "../lib/email";
import { modalHelper } from "../lib/modal";

//order now events
export const orderNowEvents = (toast, store) => {
  let modalCloseElement = document.getElementById("close-modal");
  let modalElement = document.getElementById("modal");

  let divElement;
  let formElement;

  const orderNowElement = insertOrderNowForm();
  const modalUtility = modalHelper(modalElement);

  const formEventBuild = () => {
    const storageAddress = store.get(storageKeys.country);
    formElement = document.getElementById("order-now-form");
    formElement.address.value = Object.values(storageAddress)?.join(", ");

    //detecting submit event in order now
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();

      //getting data from form
      const email = e.target.email.value;
      const address = e.target.address.value;

      const isValidEmail = validateEmail(email);

      //validating email
      if (!isValidEmail) {
        toast.errorToast(`Your email is not valid`);
        return;
      }

      //validating address
      if (address.length === 0) {
        toast.errorToast(`Your address is not valid`);
        return;
      }

      formElement.reset();

      toast.infoToast(
        `Thanks for your order email: ${email}, address: ${address}`
      );

      //when the form was send everything closes
      orderNowElement.dismissElement();
      divElement?.parentNode?.removeChild(divElement);
      modalElement?.classList.toggle("hidden");
    });
  };

  const buildEvents = () => {
    const orderButtonElement = document.getElementById("order-now-button");

    orderButtonElement.addEventListener("click", () => {
      divElement = document.createElement("div");

      modalElement.classList.add(
        "w-screen",
        "h-screen",
        "bg-black/80",
        "flex",
        "justify-center",
        "items-center"
      );

      divElement.classList.add(
        "max-w-[450px]",
        "rounded-lg",
        "bg-white",
        "dark:bg-neutral-900",
        "w-full",
        "h-max",
        "mx-5"
      );

      modalUtility?.insertElementInModal(divElement);
      orderNowElement?.buildElement(divElement);
      modalUtility?.toggleModal();

      formEventBuild();
    });

    //modal close event
    modalCloseElement.addEventListener("click", () => {
      orderNowElement?.dismissElement();
      divElement?.parentNode?.removeChild(divElement);
    });
  };

  return { buildEvents };
};
