export const insertProducts = (products) => {
  const productTemplate = document.querySelector("#product-template");
  const productListElement = document.querySelector("#list-products-container");

  const buildElement = () => {
    products.forEach((product) => {
      const clon = productTemplate.content.cloneNode(true);

      const article = clon.querySelector("#article-product");
      article.style.backgroundImage = `url(${product.img})`;

      const title = clon.querySelector("#title-product");
      title.textContent = product.title;

      const description = clon.querySelector("#description-product");
      description.textContent = product.description;

      productListElement.appendChild(clon);
    });
  };

  return {
    buildElement,
  };
};
