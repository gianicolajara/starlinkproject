//heroe events
export const heroeEvents = () => {
  const videoHeroeElement = document.querySelector("#heroe-video");
  const titleElement = document.querySelector("#title");

  const buildEvents = () => {
    //we detect when the video starts playing
    videoHeroeElement.ontimeupdate = () => {
      if (window.innerWidth < 768) {
        return;
      }

      //we get the total length of the video in seconds
      const length = videoHeroeElement.duration % 60;
      //we obtain the percentage reproduced
      const percentage = (videoHeroeElement.currentTime / length) * 100;

      //if the video is between 0 and 24 percent, the main title of the page is displayed, otherwise it is deleted.
      if (percentage >= 0 && percentage <= 24) {
        titleElement.style.display = "block";
      } else {
        titleElement.style.display = "none";
      }
    };
  };

  return {
    buildEvents,
  };
};
