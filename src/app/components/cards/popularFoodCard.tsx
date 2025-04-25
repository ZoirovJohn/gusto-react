import { Link } from "react-router-dom";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";

function PopularFoodCard({ product }: { product: Product }) {
  const { productName, productImages, productViews, productPrice } = product;
  const items = ["4 Piece Chicken", "Spicy Sauce"];
  const imagePath = `${serverApi}/${productImages[0]}`;
  return (
    <div className="col-lg-6 popular-item-mt-30px" data-aos="fade-up">
      <div className="popular-item-box">
        <div className="popular-item-box-img">
          <img src={imagePath} alt="thumb" />

          <div className="popular-item-box-img-overlay">
            <div className="icon">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.361 2.72748C9.03157 1.3148 10.9691 1.3148 11.6396 2.72748L12.7986 5.16895C13.0649 5.72993 13.5796 6.11875 14.175 6.20871L16.7664 6.60021C18.2659 6.82675 18.8646 8.74259 17.7796 9.84221L15.9044 11.7426C15.4736 12.1793 15.277 12.8084 15.3787 13.425L15.8213 16.1084C16.0775 17.6611 14.51 18.8452 13.1689 18.1121L10.851 16.8451C10.3184 16.554 9.68221 16.554 9.14964 16.8451L6.8318 18.1121C5.49065 18.8452 3.92318 17.6611 4.17931 16.1084L4.62198 13.425C4.72369 12.8084 4.52709 12.1793 4.09623 11.7426L2.22105 9.84221C1.13605 8.74259 1.73477 6.82675 3.23421 6.60021L5.82564 6.20871C6.42107 6.11875 6.9358 5.72993 7.20208 5.16895L8.361 2.72748Z"
                    fill="#FFB23E"
                  />
                </svg>
              </span>
            </div>

            <div className="text">
              <p>{productViews}</p>
            </div>
          </div>
        </div>

        <div className="popular-inner-box">
          <div className="popular-item-box-text">
            <h3>{productName}</h3>
          </div>
          {items?.map((item) => (
            <div className="popular-inner-item" key={item}>
              <div className="icon">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_304_21999)">
                      <path
                        d="M6.66699 10.0013L8.77923 11.9023C9.13881 12.2259 9.69748 12.1764 9.99449 11.7945L13.3337 7.5013M10.0003 18.3346C14.6027 18.3346 18.3337 14.6037 18.3337 10.0013C18.3337 5.39893 14.6027 1.66797 10.0003 1.66797C5.39795 1.66797 1.66699 5.39893 1.66699 10.0013C1.66699 14.6037 5.39795 18.3346 10.0003 18.3346Z"
                        stroke="#FE724C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </span>
              </div>

              <div className="text">
                <h5>{item}</h5>
              </div>
            </div>
          ))}

          <div className="popular-inner-item-btm">
            <div className="text">
              <h3>${productPrice}</h3>
            </div>

            <div className="popular-inner-item-btn">
              <Link to="/shopping-cart" className="main-btn-five">
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
                    ></path>
                    <path
                      d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M14 8L14 13"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M16.5 10.5L11.5 10.5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                Add to Basket
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularFoodCard;
