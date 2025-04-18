import { useState } from "react";
import { useSelector } from "react-redux";
import { retrieveChosenProduct } from "../../pages/all-food/selector";
import { serverApi } from "../../../lib/config";
import Slider from "../slider"; // This should wrap Swiper from 'swiper/react'

function FoodSlider() {
  const product = useSelector(retrieveChosenProduct);
  const productImages = product?.productImages || [];

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  if (!productImages.length) {
    return <div>Loading images...</div>; // or return null
  }

  return (
    <div className="food-details-slick">
      <Slider
        loop={true}
        spaceBetween={10}
        effect="fade"
        className="slider-for"
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        autoplay={{
          delay: 2500,
          speed: 2000,
          disableOnInteraction: false,
        }}
      >
        {productImages.map((image: string, index: number) => (
          <div className="slider-for-img" key={`main-${index}`}>
            <img
              src={`${serverApi}/${image}`}
              alt={`Product image ${index + 1}`}
            />
          </div>
        ))}
      </Slider>

      <Slider
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        autoplay={{
          delay: 2500,
          speed: 2000,
          disableOnInteraction: false,
        }}
        watchSlidesProgress={true}
        className="slider-nav slider-thumb"
      >
        {productImages.map((image: string, index: number) => (
          <div className="slider-nav-img" key={`thumb-${index}`}>
            <img src={`${serverApi}/${image}`} alt={`Thumb ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FoodSlider;
