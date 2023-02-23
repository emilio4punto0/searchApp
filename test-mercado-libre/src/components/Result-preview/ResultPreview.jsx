// utils
import { useParams } from "react-router-dom";
import { useFetch } from "../../helpers/commons";
import CardProductSearch from "../Card-product-search/CardProductSearch";

//components
import SearchBox from "../Search-box/SearchBox.jsx";

export default function resultPreview() {
  let { search } = useParams();

  const { data, error, loading } = useFetch(
    `http://localhost:3000/api/items/${search}`
    /*  `https://api.mercadolibre.com/sites/MLA/search?q=:${search}&limit=4` */
  );
  if (loading) {
    return <> Cargando...</>;
  }

  if (error) {
    errors.display(error);
    return null;
  }
  if (data) {
    return (
      <>
        <SearchBox />
        <div id="cardProductSearch">
          {data.map((product) => {
            if (!product.author)
              return <CardProductSearch product={product} key={product.id} />;
          })}
        </div>
      </>
    );
  }
}
