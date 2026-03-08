document.addEventListener("DOMContentLoaded", () => {

  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {

    const selectors = card.querySelectorAll(".variant-selector");
    const priceDisplay = card.querySelector("[data-price-display]");
    const addButton = card.querySelector(".add-to-cart-btn");
    const variantsScript = card.querySelector(".variants-json");

    if (!variantsScript) return;

    const variants = JSON.parse(variantsScript.textContent);

    let selectedVariant = variants[0];

    function getSelectedOptions() {
      const options = [];

      selectors.forEach((select) => {
        options.push(select.value);
      });

      return options;
    }

    function findVariant() {

      const selectedOptions = getSelectedOptions();

      const variant = variants.find((variant) => {

        return variant.options.every((option, index) => {
          return option === selectedOptions[index];
        });

      });

      return variant;
    }

    function updatePrice(variant) {

      if (!variant || !priceDisplay) return;

      const price = (variant.price / 100).toFixed(2);

      priceDisplay.textContent = `R$ ${price}`;
    }

    selectors.forEach((select) => {

      select.addEventListener("change", () => {

        const variant = findVariant();

        if (variant) {
          selectedVariant = variant;
          updatePrice(variant);
        }

      });

    });

    if (!addButton) return;

    addButton.addEventListener("click", async () => {

      if (!selectedVariant) return;

      try {

        const response = await fetch("/cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id: selectedVariant.id,
            quantity: 1
          })
        });

        if (!response.ok) {
          throw new Error("Erro ao adicionar produto");
        }

        alert("Produto adicionado ao carrinho");

      } catch (error) {

        console.error(error);
        alert("Erro ao adicionar ao carrinho");

      }

    });

  });

});