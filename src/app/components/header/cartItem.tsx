import { serverApi } from "../../../lib/config";
import { CartItemType } from "../../../lib/types/search";
import { useBasket } from "../../hooks/BasketProvider";

function CartItem({ item }: { item: CartItemType }) {
  const imagePath = `${serverApi}/${item.image}`;

  const { onAdd, onRemove, onDelete } = useBasket();
  return (
    <div className="cart-dropdown-item-box">
      <div className="cart-dropdown-item">
        <div className="cart-dropdown-item-img">
          <img
            src={imagePath}
            alt="img"
            style={{
              width: "70px",
              height: "70px",
              objectFit: "cover",
              borderRadius: "20%",
            }}
          />
        </div>
        <div className="cart-dropdown-item-text">
          <h3>{item.name}</h3>
          <p>${item.price}</p>
        </div>
      </div>
      <div className="cart-dropdown-inner">
        <div className="cart-dropdown-inner-btn">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              onRemove(item);
            }}
          >
            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9H15"
                  stroke="#28303F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
        <div className="cart-dropdown-inner-btn cart-dropdown-inner-btn-two ">
          <h5 style={{ margin: "4px" }}> {item.quantity} </h5>
        </div>
        <div className="cart-dropdown-inner-btn">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              onAdd(item);
            }}
          >
            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 4.5V13.5M13.5 9L4.5 9"
                  stroke="#28303F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
        <div className="cart-dropdown-inner-btn" style={{ marginLeft: "10px" }}>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              onDelete(item);
            }}
          >
            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 6V13.5C3.75 15.1569 5.09315 16.5 6.75 16.5H11.25C12.9069 16.5 14.25 15.1569 14.25 13.5V6M10.5 8.25V12.75M7.5 8.25L7.5 12.75M12 3.75L10.9453 2.16795C10.6671 1.75065 10.1988 1.5 9.69722 1.5H8.30278C7.80125 1.5 7.3329 1.75065 7.0547 2.16795L6 3.75M12 3.75H6M12 3.75H15.75M6 3.75H2.25"
                  stroke="#F01543"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
