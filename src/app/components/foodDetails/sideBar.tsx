import promoImg2 from "../../../assets/images/thumb/promobanner-02.png";
import { useSelector } from "react-redux";
import { retrieveChosenProduct } from "../../pages/all-food/selector";

function SideBar() {
  const product = useSelector(retrieveChosenProduct);
  const ingredients = product?.productIngredient?.split(",") || [];

  return (
    <div className="col-lg-4 mt-5">
      <div className="blog-details-promobanner-two">
        <a href="#">
          <img src={promoImg2} className="w-100" alt="Promo" />
        </a>
      </div>

      <div className="together-box mt-5">
        <div className="together-box-text">
          <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
            Ingredients:
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {ingredients.map((item, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "18px",
                }}
              >
                {item.trim()}
              </span>
            ))}
          </div>

          {/* Views and Likes */}
          <div
            className="product-meta"
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "8px",
              fontSize: "16px",
              color: "#444",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f7f7f7",
                padding: "6px 12px",
                borderRadius: "30px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                width="40"
                height="40"
                style={{ marginRight: "6px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span style={{ fontWeight: 700, fontSize: 25 }}>
                {product?.productPrice}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f7f7f7",
                padding: "6px 12px",
                borderRadius: "30px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#888"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: "6px" }}
              >
                <path
                  d="M12 4.5C7 4.5 2.73 8.11 1 12c1.73 3.89 6 7.5 11 7.5s9.27-3.61 11-7.5c-1.73-3.89-6-7.5-11-7.5Zm0 12c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5S14.49 16.5 12 16.5Zm0-7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
                  fill="currentColor"
                />
              </svg>
              <span style={{ fontWeight: 500 }}>{product?.productViews}</span>
            </div>
          </div>
        </div>

        <div className="together-box-inner-btn-btm">
          <a href="#" className="main-btn-six" tabIndex={-1}>
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
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
