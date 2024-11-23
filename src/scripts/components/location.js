export const insertLocation = (fatherElement) => {
  if (!fatherElement)
    throw new Error("Father Element is mandatory in Insert Location");

  let pElement;

  const buildElement = () => {
    pElement = document.createElement("p");

    pElement.classList.add(
      "text-white",
      "text-center",
      "text-sm",
      "lg:text-base"
    );
    pElement.setAttribute(
      "aria-label",
      "if your location is correct, will be shown in this paragraph"
    );
  };

  const insertLocationCountry = (address) => {
    if (!pElement) {
      buildElement();
    }

    if (address) {
      pElement.innerHTML = `Your current location is <strong>${address}</strong> <br /> our product is avaliable in your location`;
    } else {
      pElement.textContent = "Country not available";
    }
    fatherElement.appendChild(pElement);
  };

  const insertLocationOffline = () => {
    if (!pElement) {
      buildElement();
    }
    pElement.textContent = "Your internet is disconnected";
    fatherElement.appendChild(pElement);
  };

  const insertLocationError = (error) => {
    if (!pElement) {
      buildElement();
    }
    pElement.textContent = `Error getting location: ${
      error.message ?? "unknown error"
    }`;
    fatherElement.appendChild(pElement);
  };

  const resetLocationText = () => {
    pElement?.parentNode?.removeChild(pElement);
    pElement = undefined;
  };

  return {
    insertLocationCountry,
    insertLocationOffline,
    resetLocationText,
    insertLocationError,
  };
};
