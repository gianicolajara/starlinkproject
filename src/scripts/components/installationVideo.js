export const insertInstallationVideo = () => {
  let modalElement = document.getElementById("modal");
  let divElement;

  const buildElement = () => {
    const frameElement = document.createElement("iframe");
    divElement = document.createElement("div");

    divElement.classList.add(
      "flex",
      "justify-center",
      "items-center",
      "w-full",
      "h-full"
    );

    frameElement.classList.add("w-[90vw]", "h-[80vh]");
    frameElement.setAttribute(
      "src",
      "https://www.youtube.com/embed/AmgwkKgZaGk?autoplay=1"
    );
    frameElement.setAttribute(
      "title",
      "How to setup and install your Starlink Kit"
    );
    frameElement.setAttribute("frameborder", "0");
    frameElement.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    );
    frameElement.setAttribute(
      "referrerpolicy",
      "strict-origin-when-cross-origin"
    );

    frameElement.setAttribute("allowfullscreen", "true");

    divElement.appendChild(frameElement);

    modalElement.appendChild(divElement);
  };

  const dismissElement = () => {
    divElement?.parentNode?.removeChild(divElement);
    divElement = undefined;
  };

  return { buildElement, dismissElement };
};
