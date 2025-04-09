import { useSelector } from "react-redux";
import PopularFoodCard from "../../components/cards/popularFoodCard";
import { retrieveProducts } from "./selector";

function List() {
  const products = useSelector(retrieveProducts);

  return (
    <div
      className="tab-pane fade active show"
      id="pills-contact"
      role="tabpanel"
      aria-labelledby="pills-contact-tab"
    >
      <div className="row popular-item-box-mt">
        {products && products.length > 0 ? (
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
