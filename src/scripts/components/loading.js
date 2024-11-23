export const insertLoading = (parentElement) => {
  if (!parentElement)
    throw new Error("Parent element is mandatory in Insert Loading");

  let divElement;
  const buildElement = () => {
    divElement = document.createElement("div");
    divElement.classList.add(
      "border-x-2",
      "border-t-2",
      "border-gray-300",
      "rounded-full",
      "w-5",
      "h-5",
      "animate-spin"
    );

    parentElement.appendChild(divElement);
  };

  const dismissElement = () => {
    if (divElement.classList.length === 0)
      throw new Error("This loading element doesn't exist");

    divElement?.parentNode.removeChild(divElement);
    divElement = undefined;
  };

  return { buildElement, dismissElement };
};
