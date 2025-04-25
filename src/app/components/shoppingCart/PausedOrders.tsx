import { useState } from "react";
import ViewModal from "./viewModal";
import { useSelector } from "react-redux";
import { retrievePausedOrders } from "./selector";
import { useGlobals } from "../../hooks/useGlobals";
import { Order, OrderItem, OrderUpdateInput } from "../../../lib/types/orders";
import { OrderStatus } from "../../../lib/enums/order.enum";
import OrderService from "../../services/OrderService";
import { Messages, serverApi } from "../../../lib/config";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { T } from "../../../lib/types/common";
import { Product } from "../../../lib/types/product";

function PausedOrders({
  item,
  order,
  setValue,
}: {
  item: OrderItem;
  order: Order;
  setValue: (input: string) => void;
}) {
  const [viewProduct, setViewProduct] = useState(false);

  const product: Product = order.productData.filter(
    (ele: Product) => item.productId === ele._id
  )[0];
  const imagePath = `${serverApi}/${product.productImages[0]}`;

  return (
    <>
      <ViewModal isOpen={viewProduct} close={() => setViewProduct(false)} />
      <tr>
        <td style={{ border: "none" }}>
          <div className="tabel-img">
            <img
              src={imagePath}
              alt="img"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>
        </td>

        <td style={{ width: "250px", border: "none" }}>
          <div className="tabel-text">
            <h5 style={{ marginLeft: "-50px" }}>
              {product.productName.length > 20
                ? product.productName.slice(0, 20) + ".."
                : product.productName}
            </h5>
          </div>
        </td>
        <td style={{ border: "none" }}>
          <div className="tabel-modal-btn">
            <button
              type="button"
              className="view-btn"
              onClick={() => setViewProduct(true)}
            >
              <span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.1303 14.1469C22.2899 12.9268 22.2899 11.0732 21.1303 9.8531C19.1745 7.79533 15.8155 5 12 5C8.18448 5 4.82549 7.79533 2.86971 9.8531C1.7101 11.0732 1.7101 12.9268 2.86971 14.1469C4.82549 16.2047 8.18448 19 12 19C15.8155 19 19.1745 16.2047 21.1303 14.1469ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    fill="white"
                  />
                </svg>
              </span>{" "}
              View
            </button>
          </div>
        </td>

        <td style={{ border: "none" }}>
          <div className="tabel-text">
            <h6>
              <span>Size :</span> {product.productSize}
            </h6>
          </div>
        </td>
        <td style={{ border: "none" }}>
          <div className="tabel-text">
            <h6>
              ${item.itemPrice} x {item.itemQuantity} = $
              {item.itemPrice * item.itemQuantity}
            </h6>
          </div>
        </td>
      </tr>
    </>
  );
}

export default PausedOrders;
