import Slider from "../slider";
import { foods } from "../../../lib/data/food";
import FoodCard from "../cards/foodCard";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveNewDishes } from "../../pages/home/selector";

const newDishesRetriever = createSelector(retrieveNewDishes, (newDishes) => ({
  newDishes,
}));

function FeaturedFood() {
  const { newDishes } = useSelector(newDishesRetriever);

  console.log("newDishes:", newDishes);

  return (
    <section className="featured s-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="featured-head">
              <h2>Our Featured & Newest Restaurant</h2>
            </div>
          </div>
        </div>
        <div className="row   ">
          <Slider
            spaceBetween={0}
            centeredSlides={true}
            className="featured-slick red-pagination"
            pagination={true}
            freeMode={true}
            speed={500}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={1}
            allowTouchMove={false}
            breakpoints={{
              1: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
          >
            {newDishes?.map((product) => (
              <FoodCard key={product._id} product={product} className=" pb-48" />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default FeaturedFood;
