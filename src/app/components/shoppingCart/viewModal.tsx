import { OrderItem } from "../../../lib/types/orders";
import { Product } from "../../../lib/types/product";

function ViewModal({
  isOpen,
  close,
  item,
  product,
  imagePath,
}: {
  isOpen: boolean;
  close: () => void;
  item: OrderItem;
  product: Product;
  imagePath: string;
}) {
  const productIngredients: string[] | undefined =
    product?.productIngredient?.split(",");
  const totalPrice = item?.itemPrice * item?.itemQuantity;
  return (
    <div
      className="modal fade show modal-open-animation"
      style={{ display: isOpen ? "block" : "none" }}
      id="exampleModal"
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          background: "rgba(0,0,0,0.5)",
        }}
        onClick={close}
      ></div>
      <div className="modal-dialog">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            onClick={close}
            style={{ color: "white" }}
          >
            x
          </button>
          <div className="modal-body">
            <div className="featured-item  ">
              <div className="featured-item-img">
                <img src={imagePath} className="w-100" alt="featured-thumb" />
              </div>
            </div>

            <div className="modal-body-text">
              <h3>
                {product?.productName.length > 20
                  ? product?.productName.slice(0, 20) + ".."
                  : product?.productName}
              </h3>
              <h5>${item?.itemPrice}</h5>
            </div>

            <div className="modal-body-item-box">
              {productIngredients?.map((ingredient) => (
                <div className="together-box-item">
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault2"
                    >
                      {ingredient}
                    </label>
                  </div>
                </div>
              ))}

              <div className="together-box-inner-btn">
                <div className="modal-main">
                  <div className="grid-text">
                    <p>Product Quantity</p>
                    <p>{item?.itemQuantity}</p>
                  </div>
                </div>

                <div className="modal-main modal-main-two ">
                  <div className="grid-text">
                    <p>Total Price</p>
                  </div>
                  <div className="together-box-inner-btn-dropdown">
                    <h4 style={{ fontWeight: "600" }}> ${totalPrice}</h4>
                  </div>
                </div>
              </div>

              <div className="together-box-inner-btn-btm">
                <a
                  href=""
                  className="main-btn-six"
                  tabIndex={-1}
                  onClick={(e) => {
                    e.preventDefault();
                    close();
                  }}
                >
                  OK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewModal;
