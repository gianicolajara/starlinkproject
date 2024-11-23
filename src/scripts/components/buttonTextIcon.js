import { insertLoading } from "./loading";

export const insertButtonTextIcon = ({
  icon,
  text,
  fatherElement,
  description = "This is a button",
  onClick,
  describeBy,
}) => {
  if (!fatherElement)
    throw new Error("Father Element is mandatory in Button Text Icon");

  const templateElement = document.getElementById("button-text-icon-template");

  let clonElement;

  let textElement;
  let iconElement;

  let buttonElement;
  let loaderElement;

  const buildElement = () => {
    clonElement = templateElement.content.cloneNode(true);

    textElement = clonElement.getElementById("button-text-icon-text");
    iconElement = clonElement.getElementById("button-text-icon-icon");

    buttonElement = clonElement.getElementById("button-text-icon");

    buttonElement.setAttribute("aria-label", description);

    if (describeBy) {
      buttonElement.setAttribute("aria-describedby", describeBy);
    }

    loaderElement = insertLoading(buttonElement);

    if (!text) {
      textElement.parentNode.removeChild(textElement);
    }

    if (text) {
      textElement.textContent = text;
    }

    if (!icon) {
      iconElement.parentNode.removeChild(iconElement);
    }

    if (icon) {
      iconElement.classList.add("fa", icon);
    }

    const handleClick = () => {
      onClick();
    };

    buttonElement.addEventListener("click", handleClick);

    fatherElement.appendChild(clonElement);
  };

  const dismissElement = () => {
    if (!clonElement) return;

    buttonElement.parentNode?.removeChild(buttonElement);
    buttonElement.removeEventListener("click", onClick);

    clonElement = undefined;
    textElement = undefined;
    iconElement = undefined;
    buttonElement = undefined;
    loaderElement = undefined;
  };

  const loadingElement = () => {
    if (!clonElement) return;
    loaderElement.buildElement();

    textElement.style.display = "none";
    iconElement.style.display = "none";
    buttonElement.disabled = true;
  };

  const stopLoadingElement = () => {
    if (!clonElement) return;
    textElement.style.display = "inline";
    iconElement.style.display = "inline";
    loaderElement.dismissElement();
    buttonElement.disabled = false;
  };

  return {
    buildElement,
    dismissElement,
    loadingElement,
    stopLoadingElement,
  };
};
