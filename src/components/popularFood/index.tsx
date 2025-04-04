import { popularFoods } from "../../data/food";
import PopularFoodCard from "../cards/popularFoodCard";

function PopularFood() {
  return (
    <section className="popular s-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="popular-head">
              <h2>Most Popular Items</h2>
            </div>
          </div>
        </div>

        <div className="row popular-item-box-mt">
          {popularFoods?.map((food) => (
            <PopularFoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularFood;
