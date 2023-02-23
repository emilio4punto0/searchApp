const middlewareItemData = (req, res) => {
  try {
    fetch(`https://api.mercadolibre.com/items/${req.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        const {
          id,
          title,
          price,
          pictures,
          condition,
          free_shipping,
          sold_quantity,
          descriptions,
        } = data;
        res.send({
          author: {
            name: "Emilio",
            lastname: "Padilla",
          },
          item: {
            id,
            title,
            price,
            pictures,
            condition,
            free_shipping,
            sold_quantity,
            descriptions,
          },
        });
      })
      .catch((err) => err);
  } catch (err) {
    throw err;
  }
};

export default middlewareItemData;
