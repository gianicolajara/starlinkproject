import { storageKeys } from "../../config/storage";

//dark mode events
export const darkModeEvents = (store) => {
  let darkModeElement = document.getElementById("dark-mode-button");
  let darkModeIcon = document.getElementById("dark-mode-icon");
  let darkModeText = document.getElementById("dark-mode-text");
  const htmlElement = document.querySelector("html");
  const config = { attributes: true, childList: false, subtree: false };

  const buildEvents = () => {
    const storageDarkMode = Boolean(store.get(storageKeys.darkMode));

    if (storageDarkMode) {
      htmlElement.classList.add("dark");
      darkModeIcon.classList.remove("fa", "fa-moon-o");
      darkModeIcon.classList.add("fa", "fa-sun-o");
      darkModeText.textContent = "Dark Mode";
    }

    if (!storageDarkMode) {
      htmlElement.classList.remove("dark");
      darkModeIcon.classList.remove("fa", "fa-sun-o");
      darkModeIcon.classList.add("fa", "fa-moon-o");
      darkModeText.textContent = "Light Mode";
    }

    darkModeElement.addEventListener("click", () => {
      htmlElement.classList.toggle("dark");

      const isDark = !!Array.from(htmlElement.classList).includes("dark");

      store.save({
        key: storageKeys.darkMode,
        data: isDark,
        expire: false,
      });
    });

    //we look at the html element for attribute changes to see if the darkmode is activated in tailwind
    const observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        const classList = Array.from(mutation.target.classList);

        //dark mode activate
        if ((mutation.type === "attributes") & classList.includes("dark")) {
          darkModeIcon.classList.remove("fa", "fa-moon-o");
          darkModeIcon.classList.add("fa", "fa-sun-o");
          darkModeText.textContent = "Dark Mode";
        }

        //light mode activate
        if ((mutation.type === "attributes") & !classList.includes("dark")) {
          darkModeIcon.classList.remove("fa", "fa-sun-o");
          darkModeIcon.classList.add("fa", "fa-moon-o");
          darkModeText.textContent = "Light Mode";
        }
      }
    });

    //activate observer
    observer.observe(htmlElement, config);
  };

  return { buildEvents };
};
