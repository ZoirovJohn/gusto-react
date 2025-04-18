import { useDispatch } from "react-redux";
import FoodSlider from "./foodSlider";
import SideBar from "./sideBar";
import { setChosenProduct } from "../../pages/all-food/slice";
import ProductService from "../../services/ProductService";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { retrieveChosenProduct } from "../../pages/all-food/selector";

function FoodDescriptionSec() {
  const { productId } = useParams<{ productId?: string }>();
  const dispatch = useDispatch();
  const product = useSelector(retrieveChosenProduct);

  useEffect(() => {
    if (!productId) return;

    const product = new ProductService();
    product
      .getProduct(productId)
      .then((data) => dispatch(setChosenProduct(data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="food-details-section s-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="food-details-head">
              <h2>{product?.productName}</h2>
            </div>
            <FoodSlider />
          </div>
          <SideBar />
        </div>
      </div>
    </section>
  );
}

export default FoodDescriptionSec;
// SLICE
