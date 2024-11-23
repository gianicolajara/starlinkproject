/**
 * modalHelper is a function that takes a modal element and returns an object
 * containing two helper functions: toggleModal and insertElementInModal.
 */
export const modalHelper = (modalElement) => {
  // toggleModal is a function that toggles the "hidden" class in the modal element.
  const toggleModal = () => {
    modalElement.classList.toggle("hidden");
  };

  // insertElementInModal is a function that inserts the given element inside the modal element.
  const insertElementInModal = (element) => {
    modalElement.appendChild(element);
  };

  return {
    toggleModal,
    insertElementInModal,
  };
};
