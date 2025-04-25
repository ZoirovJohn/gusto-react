import { cartInfo } from "../../../lib/data/shoppingCarts";
import CartItem from "./cartItem";
import { Link } from "react-router-dom";
import { useState } from "react";

function ShoppingCartSec() {
  const [activeDescription, setActiveDescription] = useState("PAUSED ORDERS");

  return (
    <div className="food-details-item-box">
      <ul className="nav nav-pills" style={{ marginTop: "20px" }}>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link  ${
              activeDescription === "PAUSED ORDERS" ? "active" : ""
            }`}
            onClick={(e) =>
              setActiveDescription((e.target as HTMLElement)?.innerText)
            }
          >
            PAUSED ORDERS
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeDescription === "PROCESS ORDERS" ? "active" : ""
            }`}
            onClick={(e) =>
              setActiveDescription((e.target as HTMLElement)?.innerText)
            }
          >
            PROCESS ORDERS
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeDescription === "FINISHED ORDERS" ? "active" : ""
            }`}
            onClick={(e) =>
              setActiveDescription((e.target as HTMLElement)?.innerText)
            }
          >
            FINISHED ORDERS
          </button>
        </li>
        <hr />
      </ul>
      <div className="tab-content">
        <div
          className={`tab-pane fade ${
            activeDescription === "PAUSED ORDERS" ? "show active" : ""
          }`}
        >
          <section className="shopping-cart">
            <div className="container ">
              {[1, 2, 3].map((cartItem) => (
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
                          {cartInfo?.map((cartItem) => (
                            <CartItem
                              key={cartItem.id}
                              {...cartItem}
                              pageName="pausedOrders"
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
                      <Link to="" className="main-btn-six">
                        Cancel
                      </Link>
                      <Link
                        to=""
                        className="main-btn-six"
                        style={{
                          backgroundColor: "green",
                          color: "#D3D3D3",
                          border: "1px solid green",
                        }}
                      >
                        Process
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div
          className={`tab-pane fade ${
            activeDescription === "PROCESS ORDERS" ? "show active" : ""
          }`}
        >
          <section className="shopping-cart">
            <div className="container ">
              {[1, 2, 3].map((cartItem) => (
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
                          {cartInfo?.map((cartItem) => (
                            <CartItem
                              key={cartItem.id}
                              {...cartItem}
                              pageName="processOrders"
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
                      <Link
                        to=""
                        className="main-btn-six"
                        style={{
                          backgroundColor: "#4CAF50",
                          color: "#D3D3D3",
                          border: "1px solid #4CAF50",
                        }}
                      >
                        Verify
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div
          className={`tab-pane fade ${
            activeDescription === "FINISHED ORDERS" ? "show active" : ""
          }`}
        >
          <section className="shopping-cart">
            <div className="container ">
              {[1, 2, 3].map((cartItem) => (
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
                          {cartInfo?.map((cartItem) => (
                            <CartItem
                              key={cartItem.id}
                              {...cartItem}
                              pageName="finishedOrders"
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
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartSec;
