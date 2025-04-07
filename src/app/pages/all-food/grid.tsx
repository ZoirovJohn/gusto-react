import { gridFoods } from "../../../lib/data/foodView";
import FoodCard from "../../components/cards/foodCard";
import { Product } from "../../../lib/types/product";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductService from "../../services/ProductService";
import { Dispatch } from "@reduxjs/toolkit";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

function Grid() {
  const { setProducts } = actionDispatch(useDispatch());
  return (
    <div
      className="tab-pane fade show active"
      id="pills-home"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
    >
      <div className="row">
        {gridFoods?.map((product) => (
          <FoodCard
            product={product}
            className="col-lg-4 col-md-6 featured-item-mt "
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;
