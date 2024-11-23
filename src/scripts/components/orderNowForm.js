export const insertOrderNowForm = () => {
  let templateFormElement = document.getElementById("order-now-form-template");
  let containerElement;

  const buildElement = (fatherElement) => {
    if (!fatherElement)
      throw new Error("Father element is mandatory in order now form");

    containerElement = document.createElement("div");
    containerElement.classList.add(
      "flex",
      "justify-center",
      "items-center",
      "w-full",
      "h-full"
    );

    const clone = templateFormElement.content.cloneNode(true);
    containerElement.appendChild(clone);
    fatherElement.appendChild(containerElement);
  };

  const dismissElement = () => {
    containerElement?.parentNode?.removeChild(containerElement);
    containerElement = undefined;
  };

  return {
    buildElement,
    dismissElement,
  };
};
