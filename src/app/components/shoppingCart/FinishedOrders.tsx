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

function FinishedOrders({
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
        <td>
          <span> </span>
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

export default FinishedOrders;
