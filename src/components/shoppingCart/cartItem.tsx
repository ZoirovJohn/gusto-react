import { useState } from "react";
import ViewModal from "./viewModal";

function CartItem({
  image,
  title,
  size,
  addon,
  addonPrice,
  unitPrice,
  totalPrice,
  qty,
}: {
  image: string;
  title: string;
  size: string;
  addon: string;
  addonPrice: number;
  unitPrice: number;
  totalPrice: number;
  qty: number;
}) {
  const [viewProduct, setViewProduct] = useState(false);
  return (
    <>
      <ViewModal isOpen={viewProduct} close={() => setViewProduct(false)} />
      <tr>
        <td className="details-control">
          <input
            className="form-check-input"
            type="checkbox"
            id="checkboxNoLabel-0"
            value=""
            aria-label="..."
          />
        </td>
        <td>
          <div className="tabel-item">
            <div className="tabel-img">
              <img src={image} alt="img" />
            </div>
          </div>
        </td>
        <td>
          <div className="tabel-text">
            <h5>{title}</h5>
            <a href="#">
              <span>Size :</span> {size}
            </a>
            <p>
              <span>Addon :</span>
              {addon} (+${addonPrice})
            </p>
          </div>
        </td>
        <td>
          <div className="tabel-text">
            <h6>${unitPrice}</h6>
          </div>
        </td>
        <td>
          <div className="tabel-text-btn">
            <div className="grid">
              <button className="btn btn-minus ">
                <i className="fa-solid fa-minus"></i>
              </button>
              <div className="column product-qty">{qty}</div>
              <button className="btn btn-plus ">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </td>
        <td>
          <div className="tabel-text">
            <h6>${totalPrice}</h6>
          </div>
        </td>
        <td>
          <div className="tabel-modal-btn">
            <button
              type="button"
              className="view-btn"
              onClick={() => setViewProduct(true)}
            >
              <span>
                <svg
                  width="24"
                  height="24"
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
            <a href="#">
              <span>
                <svg
                  width="17"
                  height="20"
                  viewBox="0 0 17 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.834 0.890599C6.20493 0.334202 6.8294 0 7.4981 0H9.35737C10.0261 0 10.6505 0.334202 11.0215 0.8906L11.9277 2.25H15.6777C16.0919 2.25 16.4277 2.58579 16.4277 3C16.4277 3.41421 16.0919 3.75 15.6777 3.75H1.17773C0.763521 3.75 0.427734 3.41421 0.427734 3C0.427734 2.58579 0.763521 2.25 1.17773 2.25H4.92773L5.834 0.890599ZM11.4277 20H5.42773C3.2186 20 1.42773 18.2091 1.42773 16V5H15.4277V16C15.4277 18.2091 13.6369 20 11.4277 20ZM6.42773 8.25C6.84195 8.25 7.17773 8.58579 7.17773 9V16C7.17773 16.4142 6.84195 16.75 6.42773 16.75C6.01352 16.75 5.67773 16.4142 5.67773 16L5.67773 9C5.67773 8.58579 6.01352 8.25 6.42773 8.25ZM10.4277 8.25C10.8419 8.25 11.1777 8.58579 11.1777 9V16C11.1777 16.4142 10.8419 16.75 10.4277 16.75C10.0135 16.75 9.67774 16.4142 9.67773 16V9C9.67773 8.58579 10.0135 8.25 10.4277 8.25Z"
                    fill="white"
                  />
                </svg>
              </span>
            </a>
          </div>
        </td>
      </tr>
    </>
  );
}

export default CartItem;
