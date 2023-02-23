//utils
import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../helpers/commons";
import PdpMainCard from "../PdpMainCard/PdpMainCard";
import SearchBox from "../Search-box/SearchBox";

export default function Pdp() {
  let { productId } = useParams();

  const { data, error, loading } = useFetch(
    `http://localhost:3000/api/item/${productId}`
    /* `https://api.mercadolibre.com/items/${productId}` */
  );
  if (loading) {
    return <> Cargando... </>;
  }

  if (error) {
    errors.display(error);
    return null;
  }
  if (data) {
    const product = data.item;
    return (
      <>
        <SearchBox />
        <div id="pdp">
          <PdpMainCard product={product} />
        </div>
      </>
    );
  }
}
