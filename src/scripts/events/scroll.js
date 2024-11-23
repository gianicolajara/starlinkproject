//all events scrolls in web page
export const scrollEvents = () => {
  const navMenuElement = document.querySelector("#nav-menu");

  /**
   * Adds or removes classes to the navigation menu element based on the scroll position.
   */
  const navMenuInsertClassesByScroll = (lastKnownScrollPosition) => {
    {
      if (lastKnownScrollPosition >= 100) {
        navMenuElement.classList.add(
          "bg-black/50",
          "dark:bg-white/30",
          "backdrop-blur"
        );
      }

      if (lastKnownScrollPosition < 100) {
        navMenuElement.classList.remove(
          "bg-black/50",
          "dark:bg-white/30",
          "backdrop-blur"
        );
      }
    }
  };

  //init app events scrolls
  navMenuInsertClassesByScroll(window.scrollY);

  const buildEvents = () => {
    //elements that need scrolls events
    navMenuInsertClassesByScroll();

    //event register
    document.addEventListener("scroll", () => {
      let lastKnownScrollPosition = window.scrollY;

      navMenuInsertClassesByScroll(lastKnownScrollPosition);
    });
  };

  return {
    buildEvents,
  };
};
