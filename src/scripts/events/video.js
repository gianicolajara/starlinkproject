import { insertInstallationVideo } from "../components/installationVideo";
import { modalHelper } from "../lib/modal";

//video events
export const videoEvents = () => {
  let containerVideoElement = document.getElementById(
    "installation-container-video"
  );
  let modalElement = document.getElementById("modal");
  let videoElement = insertInstallationVideo();
  let modalCloseElement = document.getElementById("close-modal");

  const modalUtility = modalHelper(modalElement);

  const buildEvents = () => {
    //when the thumbnails is clicked the modal is opened with the video
    containerVideoElement.addEventListener("click", () => {
      modalUtility.toggleModal();
      modalElement.classList.add("w-screen", "h-screen", "bg-black/80");
      videoElement.buildElement();
    });

    //modal close event
    modalCloseElement.addEventListener("click", () => {
      videoElement.dismissElement();
    });
  };

  return {
    buildEvents,
  };
};
