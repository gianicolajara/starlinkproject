export const insertSmall = ({ fatherElement, text, id, description }) => {
  if (!fatherElement) {
    throw new Error("Father element is mandatory in insert small");
  }

  let smallElement;

  const buildElement = () => {
    smallElement = document.createElement("small");
    smallElement.textContent = text;

    smallElement.classList.add("text-white/70", "text-center");
    if (id) {
      smallElement.setAttribute("id", id);
    }

    if (description) {
      smallElement.setAttribute("aria-label", description);
    }

    fatherElement.appendChild(smallElement);
  };

  const dismissElement = () => {
    smallElement?.parentNode?.removeChild(smallElement);
    smallElement = undefined;
  };

  return {
    buildElement,
    dismissElement,
  };
};
