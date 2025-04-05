import Pagination from "../../components/foodList/pagination";
import { orders } from "../../../lib/data/order";
import OrderData from "../../components/dashboard/orderData";

function Order() {
  return (
    <div className="order-reorderingmain-box">
      <div className="order-reorderingmain-box-item">
        <div className="text">
          <h4>Order &amp; Reordering</h4>
        </div>
        <div className="icon">
          <a href="#">
            Last Week
            <span>
              <svg
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5002 3.16797H2.50016C1.57969 3.16797 0.833496 3.91416 0.833496 4.83464V14.8346C0.833496 15.7551 1.57969 16.5013 2.50016 16.5013H12.5002C13.4206 16.5013 14.1668 15.7551 14.1668 14.8346V4.83464C14.1668 3.91416 13.4206 3.16797 12.5002 3.16797Z"
                  stroke="#747681"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10.8335 1.5V4.83333"
                  stroke="#747681"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4.16699 1.5V4.83333"
                  stroke="#747681"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M0.833496 8.16797H14.1668"
                  stroke="#747681"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M6.66699 11.5H7.50033"
                  stroke="#747681"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7.5 11.5V14"
                  stroke="#747681"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="order-reorderingmain-box-tabel">
        <table className=" table w-100 ">
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <OrderData order={order} key={order.id} />
            ))}
          </tbody>
        </table>

        <Pagination />
      </div>
    </div>
  );
}

export default Order;
