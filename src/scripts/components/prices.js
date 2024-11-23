export const insertPrices = (list) => {
  let templateElement = document.getElementById("price-element-template");
  let pricesContainerElement = document.getElementById(
    "prices-elements-container"
  );

  let titleElement;
  let descriptionElement;
  let listElement;
  let imgElement;
  let imgContainerElement;

  const buildElement = () => {
    if (!list || list.length === 0)
      throw new Error("List is mandatory in Insert Prices");

    list.forEach((item, index) => {
      const clone = templateElement.content.cloneNode(true);
      titleElement = clone.getElementById("price-element-title");
      descriptionElement = clone.getElementById("price-element-description");
      listElement = clone.getElementById("price-element-list");
      imgElement = clone.getElementById("price-element-img");
      imgContainerElement = clone.getElementById("price-element-img-container");

      titleElement.textContent = item.title;
      descriptionElement.textContent = item.description;

      imgElement.setAttribute("src", item.img);
      imgElement.setAttribute("alt", `image for the ${item.title}`);
      imgElement.setAttribute("aria-label", `image for the ${item.title}`);

      if (index % 2 === 0) {
        imgContainerElement.classList.add("order-2");
      }

      item.descriptionItems.forEach((subItem) => {
        const liElement = document.createElement("li");
        liElement.classList.add("list-outside", "ml-5");
        liElement.textContent = subItem;

        listElement.appendChild(liElement);
      });

      pricesContainerElement.appendChild(clone);
    });
  };

  return { buildElement };
};
