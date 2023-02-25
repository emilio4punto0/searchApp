//utils
import { useNavigate } from "react-router-dom";

function CardProductSearch({
  product: {
    id,
    city_name,
    condition,
    free_shipping,
    pictures,
    price,
    sold_quantity,
    title,
  },
}) {
  const letsGoFor = useNavigate();

  return (
    <>
      <div
        className="card-product-search"
        onClick={(e) => {
          e.stopPropagation(), letsGoFor(`/api/item/${id}`);
        }}
      >
        <div className="card-product-search__img">
          <img src={pictures}></img>
        </div>
        <div className="card-product-search__content-center">
          <div className="card-product-search__content-center__price">
            ${free_shipping ? price + " Llega gratis mañana" : price}
          </div>
          <p className="card-product-search__content-center__product-name">
            {title}
          </p>
        </div>
        <div className="card-product-search__city">{city_name}</div>
      </div>
    </>
  );
}

export default CardProductSearch;
