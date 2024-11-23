//menu events
export const menuEvents = () => {
  const closeMenuElement = document.querySelector("#close-menu");
  const menuElement = document.querySelector("#menu");
  const openMenuElement = document.getElementById("open-menu");
  const htmlElement = document.querySelector("html");
  const aMenuElement = document.querySelectorAll("#menu-item");

  const buildEvents = () => {
    const handleOpenMenu = () => {
      if (!menuElement.classList.contains("open")) {
        menuElement.style.transform = "translate(0%)";
      }
      menuElement.classList.toggle("open");

      htmlElement.style.overflowY = "hidden";
    };

    const handleCloseMenu = () => {
      if (menuElement.classList.contains("open")) {
        menuElement.style.transform = "translate(100%)";
      }
      menuElement.classList.toggle("open");
      htmlElement.style.overflowY = "visible";
    };

    //handle open and close menu styles in desktop
    closeMenuElement.addEventListener("click", handleCloseMenu);

    //handle open and close menu styles in desktop
    openMenuElement.addEventListener("click", handleOpenMenu);

    //every time a menu item is clicked in phone mode, the entire menu closes.
    aMenuElement.forEach((element) => {
      element.addEventListener("click", () => {
        if (window.innerWidth <= 1024) {
          handleCloseMenu();
        }
      });
    });
  };

  return {
    buildEvents,
  };
};
