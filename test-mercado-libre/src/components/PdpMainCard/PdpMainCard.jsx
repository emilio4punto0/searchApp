function PdpMainCard({
  product: {
    condition,
    id,
    pictures,
    price,
    sold_quantity,
    title,
    descriptions,
  },
}) {
  return (
    <>
      <div className="pdp-container">
        <div className="pdp-container__firts-block">
          <div className="pdp-container__firts-block__img">
            <img src={pictures[2].url}></img>
          </div>
          <div className="pdp-container__firts-block__product-details">
            <div className="pdp-container__firts-block__product-details__condition">
              {condition == "new"
                ? "Nuevo" + " - " + sold_quantity + " vendidos"
                : " Usado"}
            </div>

            <div className="pdp-container__firts-block__product-details__product-name">
              {title}
            </div>
            <div className="pdp-container__firts-block__product-details__price">
              ${price}
            </div>
            <button className="pdp-container__firts-block__product-details__buy-button">
              Comprar ahora
            </button>
          </div>
        </div>
        {descriptions.length > 0 && (
          <div className="second-block">
            <div className="second-block__product-description">
              <h1>Descripcion del producto</h1>
              <p>{descriptions}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PdpMainCard;
