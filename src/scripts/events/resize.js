//all resize events in web page
export const resizeEvents = () => {
  const titleElement = document.querySelector("#title");

  const buildEvents = () => {
    //in case the title disappears due to its function related to the video, it is displayed again in phone mode.
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1024) {
        titleElement.style.display = "block";
        return;
      }
    });
  };

  return { buildEvents };
};
