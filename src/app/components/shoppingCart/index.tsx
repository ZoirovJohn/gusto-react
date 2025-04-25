import { cartInfo } from "../../../lib/data/shoppingCarts";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import noimage from "../../../assets/icons/noimage-list.svg";
import moment from "moment";
import { setFinishedOrders, setPausedOrders, setProcessOrders } from "./slice";
import {
  Order,
  OrderInquiry,
  OrderItem,
  OrderUpdateInput,
} from "../../../lib/types/orders";
import { useGlobals } from "../../hooks/useGlobals";
import { OrderStatus } from "../../../lib/enums/order.enum";
import OrderService from "../../services/OrderService";
import { useDispatch, useSelector } from "react-redux";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import {
  retrieveFinishedOrders,
  retrievePausedOrders,
  retrieveProcessOrders,
} from "./selector";
import { Messages } from "../../../lib/config";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { T } from "../../../lib/types/common";

function ShoppingCartSec() {
  const [value, setValue] = useState("PAUSED ORDERS");
  const { orderBuilder, authMember, setOrderBuilder } = useGlobals();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [orderInquiry, setOrderInquiry] = useState<OrderInquiry>({
    page: 1,
    limit: 5,
    orderStatus: OrderStatus.PAUSE,
  });

  const pausedOrders: Order[] = useSelector(retrievePausedOrders);
  const processOrders: Order[] = useSelector(retrieveProcessOrders);
  const finishedOrders: Order[] = useSelector(retrieveFinishedOrders);

  console.log("processOrders:", processOrders);

  useEffect(() => {
    const order = new OrderService();

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PAUSE })
      .then((data) => dispatch(setPausedOrders(data)))
      .catch((err) => console.log(err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PROCESS })
      .then((data) => dispatch(setProcessOrders(data)))
      .catch((err) => console.log(err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.FINISH })
      .then((data) => dispatch(setFinishedOrders(data)))
      .catch((err) => console.log(err));
  }, [orderInquiry, orderBuilder]);

  /** HANDLERS **/

  const deleteOrderHandler = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      const orderId = e.currentTarget.getAttribute("data-id");
      if (!orderId) throw new Error("Order ID not found");

      const confirmation = window.confirm("Do you want to delete the order?");
      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder({
          orderId,
          orderStatus: OrderStatus.DELETE,
        });
        setOrderBuilder(new Date());
      }
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err);
    }
  };

  const processOrderHandler = async (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    try {
      if (!authMember) throw new Error(Messages.error2);

      const orderId = e.currentTarget.getAttribute("data-id");
      if (!orderId) throw new Error("Order ID not found");

      const confirmation = window.confirm("Do you want proceed with payment?");
      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder({
          orderId,
          orderStatus: OrderStatus.PROCESS,
        });
        setValue("PROCESS ORDERS");
        setOrderBuilder(new Date());
      }
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err);
    }
  };

  const finishOrderHandler = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      if (!authMember) throw new Error(Messages.error2);

      const orderId = e.currentTarget.getAttribute("data-id");
      if (!orderId) throw new Error("Order ID not found");

      const confirmation = window.confirm("Have you received your order?");
      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder({
          orderId,
          orderStatus: OrderStatus.FINISH,
        });
        setValue("FINISHED ORDERS");
        setOrderBuilder(new Date());
      }
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err);
    }
  };

  if (!authMember) navigate("/");

  return (
    <div className="food-details-item-box">
      <ul className="nav nav-pills" style={{ marginTop: "20px" }}>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link  ${value === "PAUSED ORDERS" ? "active" : ""}`}
            onClick={(e) => setValue((e.target as HTMLElement)?.innerText)}
          >
            PAUSED ORDERS
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${value === "PROCESS ORDERS" ? "active" : ""}`}
            onClick={(e) => setValue((e.target as HTMLElement)?.innerText)}
          >
            PROCESS ORDERS
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              value === "FINISHED ORDERS" ? "active" : ""
            }`}
            onClick={(e) => setValue((e.target as HTMLElement)?.innerText)}
          >
            FINISHED ORDERS
          </button>
        </li>
        <hr />
      </ul>
      <div className="tab-content">
        <div
          className={`tab-pane fade ${
            value === "PAUSED ORDERS" ? "show active" : ""
          }`}
        >
          <section className="shopping-cart">
            <div className="container ">
              {pausedOrders?.map((order: Order) => (
                <div
                  className="row flex"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="col-lg-9"
                    style={{
                      borderRadius: "16px",
                      boxShadow:
                        "-12px 12px 4px 0px #bababf, 0px 4px 10px 9px #d3d3e7 inset, 0px 4px 16px 0px rgba(242, 189, 87, 0.04) inset",
                      marginBottom: "30px",
                    }}
                  >
                    <div className="tabel-main">
                      <table className="table">
                        <tbody>
                          {order?.orderItems?.map((item: OrderItem) => (
                            <PausedOrders
                              key={item._id}
                              item={item}
                              setValue={setValue}
                              order={order}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div
                      className="tabel-main-btn"
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "flex-start",
                        margin: "20px 70px 16px -20px",
                      }}
                    >
                      <h5 style={{ fontWeight: "600", marginTop: "5px" }}>
                        Product Price ${order.orderTotal - order.orderDelivery}{" "}
                        + Delivery Cost ${order.orderDelivery} = Total $
                        {order.orderTotal}
                      </h5>
                      <Link
                        to=""
                        className="main-btn-six"
                        data-id={order._id}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          e.preventDefault();
                          e.stopPropagation();
                          deleteOrderHandler(e);
                        }}
                      >
                        Cancel
                      </Link>
                      <Link
                        to=""
                        data-id={order._id}
                        className="main-btn-six"
                        style={{
                          backgroundColor: "green",
                          color: "#D3D3D3",
                          border: "1px solid green",
                        }}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          e.preventDefault();
                          e.stopPropagation();
                          processOrderHandler(e);
                        }}
                      >
                        Process
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {(!pausedOrders || pausedOrders.length === 0) && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={noimage}
                    alt="No orders"
                    style={{ width: 300, height: 300 }}
                  />
                </div>
              )}
            </div>
          </section>
        </div>
        <div
          className={`tab-pane fade ${
            value === "PROCESS ORDERS" ? "show active" : ""
          }`}
        >
          <section className="shopping-cart">
            <div className="container ">
              {processOrders?.map((order) => (
                <div
                  className="row flex"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="col-lg-9"
                    style={{
                      borderRadius: "16px",
                      boxShadow:
                        "-12px 12px 4px 0px #bababf, 0px 4px 10px 9px #d3d3e7 inset, 0px 4px 16px 0px rgba(242, 189, 87, 0.04) inset",
                      marginBottom: "30px",
                    }}
                  >
                    <div className="tabel-main">
                      <table className="table">
                        <tbody>
                          {order?.orderItems?.map((item: OrderItem) => (
                            <ProcessOrders
                              key={item._id}
                              item={item}
                              setValue={setValue}
                              order={order}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div
                      className="tabel-main-btn"
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "flex-start",
                        margin: "20px 70px 16px -20px",
                      }}
                    >
                      <h5 style={{ fontWeight: "600", marginTop: "5px" }}>
                        Product Price $25 + Delivery Cost $5 = Total $30
                      </h5>
                      <p
                        className="data-compl"
                        style={{ fontWeight: "600", marginTop: "5px" }}
                      >
                        {moment().format("YY-MM-DD HH:mm")}
                      </p>
                      <Link
                        to=""
                        data-id={order._id}
                        className="main-btn-six"
                        style={{
                          backgroundColor: "#4CAF50",
                          color: "#D3D3D3",
                          border: "1px solid #4CAF50",
                        }}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          e.preventDefault();
                          e.stopPropagation();
                          finishOrderHandler(e);
                        }}
                      >
                        Verify
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {(!processOrders || processOrders.length === 0) && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={noimage}
                    alt="No orders"
                    style={{ width: 300, height: 300 }}
                  />
                </div>
              )}
            </div>
          </section>
        </div>
        <div
          className={`tab-pane fade ${
            value === "FINISHED ORDERS" ? "show active" : ""
          }`}
        >
          <section className="shopping-cart">
            <div className="container ">
              {finishedOrders.map((order) => (
                <div
                  className="row flex"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="col-lg-9"
                    style={{
                      borderRadius: "16px",
                      boxShadow:
                        "-12px 12px 4px 0px #bababf, 0px 4px 10px 9px #d3d3e7 inset, 0px 4px 16px 0px rgba(242, 189, 87, 0.04) inset",
                      marginBottom: "30px",
                    }}
                  >
                    <div className="tabel-main">
                      <table className="table">
                        <tbody>
                          {order?.orderItems?.map((item: OrderItem) => (
                            <FinishedOrders
                              key={item._id}
                              item={item}
                              setValue={setValue}
                              order={order}
                            />
                          ))}
                        </tbody>
                      </table>

                      {/* <!-- modal  --> */}
                    </div>

                    <div
                      className="tabel-main-btn"
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "flex-start",
                        margin: "20px 70px 16px -20px",
                      }}
                    >
                      <h5 style={{ fontWeight: "600", marginTop: "5px" }}>
                        Product Price $25 + Delivery Cost $5 = Total $30
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
              {(!finishedOrders || finishedOrders.length === 0) && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={noimage}
                    alt="No orders"
                    style={{ width: 300, height: 300 }}
                  />
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartSec;
