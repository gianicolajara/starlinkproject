export const insertButton = ({
  fatherElement,
  text = "ORDER NOW",
  id,
  events,
  dismissEvents,
}) => {
  let buttonElement;

  const buildElement = () => {
    buttonElement = document.createElement("button");
    if (id) {
      buttonElement.setAttribute("id", id);
    }
    buttonElement.classList.add(
      "px-4",
      "py-2",
      "bg-white",
      "rounded-lg",
      "font-bold",
      "text-sm",
      "hover:bg-black",
      "hover:text-white",
      "hover:cursor-pointer",
      "transition-all",
      "active:scale-95"
    );
    buttonElement.textContent = text;

    fatherElement.appendChild(buttonElement);

    events?.();
  };

  const dismissElement = () => {
    if (!buttonElement) return;

    dismissEvents?.();

    buttonElement.parentNode?.removeChild(buttonElement);
    buttonElement = undefined;
  };

  return {
    buildElement,
    dismissElement,
  };
};
