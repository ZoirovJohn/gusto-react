import { useSelector } from "react-redux";
import { retrieveProducts } from "./selector";
import FoodCard from "../../components/cards/foodCard";

function Grid() {
  const products = useSelector(retrieveProducts);

  return (
    <div
      className="tab-pane fade show active"
      id="pills-home"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
    >
      <div className="row">
        {products && products.length > 0 ? (
          products.map((product) => (
            <FoodCard
              key={product._id}
              product={product}
              className="col-lg-4 col-md-6 featured-item-mt"
            />
          ))
        ) : (
          <div className="col-12 text-center">No products found</div>
        )}
      </div>
    </div>
  );
}

export default Grid;
