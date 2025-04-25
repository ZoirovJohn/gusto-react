import { Link } from "react-router-dom";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import { useNavigate } from "react-router-dom";

function FoodCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const {
    productName,
    productImages,
    productViews,
    productPrice,
    productIngredient,
  } = product;
  const ingredients = productIngredient.split(",");
  const offer = "20% Off";
  const imagePath = `${serverApi}/${productImages[0]}`;

  const navigate = useNavigate();

  const chooseDishHandler = (id: string) => {
    navigate(`/food-details/${id}`);
  };

  return (
    <div
      className={` shaf-item res-mb-20px ${className ? className : ""}  `}
      data-groups='["all", "science", "development", "architecture","engineering", "Vegetarian" ]'
    >
      <div className="featured-item  " data-aos="fade-up">
        <div
          className="featured-item-img"
          style={{
            width: "100%",
            height: "250px",
            overflow: "hidden",
          }}
          onClick={() => chooseDishHandler(product._id)}
        >
          <img
            src={imagePath}
            className="w-100"
            alt="featured-thumb"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
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
              <Link to="/all-food">{productName.slice(0, 30)}</Link>
            </h3>
          </div>

          <div className="text-item-center-item-box">
            {ingredients?.map((item) => (
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
