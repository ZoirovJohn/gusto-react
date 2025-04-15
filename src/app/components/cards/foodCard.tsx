import { Link } from "react-router-dom";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";

function FoodCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { productName, productImages, productViews, productPrice } = product;
  const items = ["4 Piece Chicken", "Spicy Sauce"];
  const offer = "20% Off";
  const imagePath = `${serverApi}/${productImages[0]}`;
  return (
    <div
      className={` shaf-item res-mb-20px ${className ? className : ""}  `}
      data-groups='["all", "science", "development", "architecture","engineering", "Vegetarian" ]'
    >
      <div className="featured-item  " data-aos="fade-up">
        <div className="featured-item-img">
          <img src={imagePath} className="w-100" alt="featured-thumb" />

          <div className="featured-item-img-overlay">
            <div className="featured-item-img-over-text">
              <div className="left-text">
                <div className="icon">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.31804 6.31804C3.90017 6.7359 3.5687 7.23198 3.34255 7.77795C3.1164 8.32392 3 8.90909 3 9.50004C3 10.091 3.1164 10.6762 3.34255 11.2221C3.5687 11.7681 3.90017 12.2642 4.31804 12.682L12 20.364L19.682 12.682C20.526 11.8381 21.0001 10.6935 21.0001 9.50004C21.0001 8.30656 20.526 7.16196 19.682 6.31804C18.8381 5.47412 17.6935 5.00001 16.5 5.00001C15.3066 5.00001 14.162 5.47412 13.318 6.31804L12 7.63604L10.682 6.31804C10.2642 5.90017 9.7681 5.5687 9.22213 5.34255C8.67616 5.1164 8.09099 5 7.50004 5C6.90909 5 6.32392 5.1164 5.77795 5.34255C5.23198 5.5687 4.7359 5.90017 4.31804 6.31804V6.31804Z"
                        stroke="#F01543"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="right-text">
                <h5>{offer} </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="featured-item-text">
          <div className="text-item">
            <div className="left">
              <h3>${productPrice}</h3>
            </div>
            <div className="right">
              <div className="icon">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4.5C7 4.5 2.73 8.11 1 12c1.73 3.89 6 7.5 11 7.5s9.27-3.61 11-7.5c-1.73-3.89-6-7.5-11-7.5Zm0 12c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5S14.49 16.5 12 16.5Zm0-7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
                      fill="#666"
                    />
                  </svg>
                </span>
              </div>
              <h5> {productViews}</h5>
            </div>
          </div>

          <div className="text-item-center">
            <h3>
              <Link to="/all-food">{productName}</Link>
            </h3>
          </div>

          <div className="text-item-center-item-box">
            {items?.map((item) => (
              <div className="text-item-center-item" key={item}>
                <div className="icon">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="#FE724C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                <div className="text">
                  <h5>{item}</h5>
                </div>
              </div>
            ))}
            <div className="featured-item-btn">
              <Link to="/shopping-cart" className="main-btn-three">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M14 8L14 13"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.5 10.5L11.5 10.5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
