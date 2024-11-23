import { modalHelper } from "../lib/modal";
//modal events
export const modalEvents = () => {
  let modalCloseElement = document.getElementById("close-modal");
  let modalElement = document.getElementById("modal");
  const htmlElement = document.querySelector("html");
  const modalUtility = modalHelper(modalElement);

  const config = { attributes: true, childList: true, subtree: true };

  const buildEvents = () => {
    //close element
    modalCloseElement.addEventListener("click", () => {
      modalUtility.toggleModal();
    });

    //observer to know when the modal is closed or open
    const observer = new MutationObserver((mutationlist) => {
      for (const mutation of mutationlist) {
        const classList = Array.from(mutation.target.classList);

        //close modal
        if (mutation.type === "attributes" && !classList.includes("hidden")) {
          htmlElement.style.overflowY = "hidden";
        }

        //open modal
        if (mutation.type === "attributes" && classList.includes("hidden")) {
          htmlElement.style.overflowY = "auto";
        }
      }
    });

    observer.observe(modalElement, config);
  };

  return { buildEvents };
};
