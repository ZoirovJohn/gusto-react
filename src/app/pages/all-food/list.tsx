import { useSelector } from "react-redux";
import { useState } from "react";
import PopularFoodCard from "../../components/cards/popularFoodCard";
import { retrieveProducts } from "./selector";

function List() {
  const products = useSelector(retrieveProducts);
  const [loading, setLoading] = useState(false);

  return (
    <div
      className="tab-pane fade active show"
      id="pills-contact"
      role="tabpanel"
      aria-labelledby="pills-contact-tab"
    >
      <div className="row popular-item-box-mt">
        {loading ? (
          <div className="col-12 text-center">Loading products...</div>
        ) : products && products.length > 0 ? (
          products.map((product) => (
            <PopularFoodCard key={product._id} product={product} />
          ))
        ) : (
          <div className="col-12 text-center">No products found</div>
        )}
      </div>
    </div>
  );
}

export default List;