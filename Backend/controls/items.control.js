const middlewareItemsData = (req, res) => {
  const author = {
    author: {
      name: "Emilio",
      lastname: "Padilla",
    },
  };
  try {
    fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=:${req.params.search}&limit=4`
    )
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.results.map((element) => {
          const {
            id,
            title,
            price,
            thumbnail: pictures,
            condition,
            shipping: { free_shipping },
            address: { city_name },
            sold_quantity,
            descriptions,
          } = element;

          return {
            id,
            title,
            price,
            pictures,
            condition,
            free_shipping,
            city_name,
            sold_quantity,
            descriptions,
          };
        });
        cleanData.unshift(author);
        res.send(cleanData);
      })
      .catch((err) => err);
  } catch (error) {
    throw error;
  }
};
export default middlewareItemsData;
