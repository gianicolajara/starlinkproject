export const insertPricesTable = (list) => {
  let bodyTableElement = document.getElementById("prices-table-body");

  const buildElement = () => {
    list.forEach((item) => {
      const trElement = document.createElement("tr");

      trElement.classList.add(
        "even:bg-neutral-200",
        "odd:bg-white",
        "border-b-2",
        "dark:odd:bg-neutral-800",
        "dark:even:bg-neutral-700",
        "dark:border-neutral-500"
      );

      Object.entries(item).forEach((entries, index) => {
        const tdElement = document.createElement("td");

        tdElement.classList.add(
          "px-6",
          "py-3",
          "text-center",
          "dark:text-white"
        );
        if (index > 0) {
          tdElement.classList.add("text-neutral-600", "dark:text-neutral-200");
        }

        tdElement.textContent = entries[1];

        trElement.appendChild(tdElement);
      });

      bodyTableElement.appendChild(trElement);
    });
  };

  return { buildElement };
};
