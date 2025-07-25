import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartItemType } from "../../../lib/types/search";
import OrderService from "../../services/OrderService";
import { Messages } from "../../../lib/config";
import { useGlobals } from "../../hooks/useGlobals";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import CartItem from "./cartItem";
import { useBasket } from "../../hooks/BasketProvider";

function HeaderCart() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, onDeleteAll } = useBasket();
  console.log("cardItems:", cartItems);

  const { authMember, setOrderBuilder } = useGlobals();
  const navigate = useNavigate();
  const itemsPrice = cartItems.reduce(
    (a: number, c: CartItemType) => a + c.quantity * c.price,
    0
  );
  const shippingCost: number = itemsPrice < 100 ? 5 : 0;
  const totalPrice = (itemsPrice + shippingCost).toFixed(1);

  const proceedOrderHandler = async () => {
    try {
      // handleClose();
      if (!authMember) throw new Error(Messages.error2);

      const order = new OrderService();
      await order.createOrder(cartItems);

      onDeleteAll();

      setOrderBuilder(new Date());
      navigate("/shopping-cart");
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className="love cart">
      <div className="click" onClick={() => setIsOpen((prev) => !prev)}></div>
      <span>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.99967 4.66536H20.9997C23.577 4.66536 25.6663 6.7547 25.6663 9.33203V15.1654C25.6663 17.7427 23.577 19.832 20.9997 19.832H11.6663C9.08901 19.832 6.99967 17.7427 6.99967 15.1654V4.66536ZM6.99967 4.66536C6.99967 3.3767 5.95501 2.33203 4.66634 2.33203H2.33301"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.833 23.918C12.833 24.8845 12.0495 25.668 11.083 25.668C10.1165 25.668 9.33301 24.8845 9.33301 23.918C9.33301 22.9515 10.1165 22.168 11.083 22.168C12.0495 22.168 12.833 22.9515 12.833 23.918Z"
            strokeWidth="1.5"
          />
          <path
            d="M23.333 23.918C23.333 24.8845 22.5495 25.668 21.583 25.668C20.6165 25.668 19.833 24.8845 19.833 23.918C19.833 22.9515 20.6165 22.168 21.583 22.168C22.5495 22.168 23.333 22.9515 23.333 23.918Z"
            strokeWidth="1.5"
          />
          <path
            d="M16.333 9.33203L16.333 15.1654"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.2503 12.25L13.417 12.25"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <div
        className={`cart-dropdown header-dropdown ${
          isOpen ? "active-dropdown" : ""
        }`}
      >
        <div className="cart-dropdown-text">
          <div className="text">
            <h3>My Basket</h3>
          </div>

          <div className="cart-dropdown-btn">
            <button
              type="button"
              className="close-btn"
              onClick={() => setIsOpen(false)}
            >
              <span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.24309 0.757865L0.757812 9.24315M9.24309 9.24309L0.757812 0.757812"
                    stroke="#9EA3AE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {cartItems.length !== 0 ? (
          <div className="cart-dropdown-btn-two">
            <Link
              to=""
              className=" cart-btn-two "
              onClick={() => onDeleteAll()}
            >
              Clear basket
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18M10 6V4a2 2 0 1 1 4 0v2M5 6h14l1 14H4L5 6z" />
                </svg>
              </span>
            </Link>
          </div>
        ) : (
          <div className="cart-dropdown-btn-two">
            <Link to="" className=" cart-btn-two ">
              Basket is empty!
            </Link>
          </div>
        )}

        <style>
          {`
          .orders-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
          }

          .orders-wrapper::-webkit-scrollbar {
            width: 8px;
          }

          .orders-wrapper::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 4px;
          }

          .orders-wrapper::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          `}
        </style>

        <div
          className="orders-main-wrapper"
          style={{
            position: "relative",
            overflow: "hidden",
            marginTop: "10px",
            width: "100%",
            height: "260px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="orders-wrapper">
            {cartItems.map((item: CartItemType) => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>
        </div>

        {cartItems.length !== 0 ? (
          <div className="cart-dropdown-sub-total">
            <div className="cart-dropdown-sub-total-item">
              <div className="text">
                <h3>Subtotal:</h3>
              </div>
              <div className="text">
                <h3>
                  <span>
                    {itemsPrice} + {shippingCost} ={" "}
                  </span>
                  <a href="">${totalPrice}</a>
                </h3>
              </div>
            </div>

            <div className="cart-dropdown-sub-total-btn">
              <Link
                to=""
                className="main-btn-four"
                onClick={(e) => {
                  e.preventDefault();
                  proceedOrderHandler();
                }}
              >
                ORDER
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <style>
        {`
          .header .menu-bg .nav-btn-main .nav-btn-two .cart::after {
            content: "${cartItems.length}";
          }
        `}
      </style>
    </div>
  );
}

export default HeaderCart;
