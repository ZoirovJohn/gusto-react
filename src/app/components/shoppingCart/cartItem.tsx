import { useState } from "react";
import ViewModal from "./viewModal";
import { ProductCollection, ProductStatus } from "../../../lib/enums/product.enum";

function CartItem({
  image,
  title,
  size,
  unitPrice,
  pageName,
}: {
  image: string;
  title: string;
  size: string;
  unitPrice: number;
  pageName: string;
}) {
  const [viewProduct, setViewProduct] = useState(false);
  return (
    <>
      <ViewModal
        isOpen={viewProduct}
        close={() => setViewProduct(false)}
        item={{
          _id: "", // Provide actual values as needed
          itemQuantity: 1,
          itemPrice: unitPrice,
          orderId: "",
          productId: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        }}
        product={{
          _id: "", // Provide actual product ID as needed
          productStatus: ProductStatus.PROCESS,
          productCollection: ProductCollection.BURGER, // Replace DEFAULT with an actual value from your ProductCollection enum/type
          productName: "",
          productPrice: 0,
          productImages: [],
          productIngredient: "", // Provide actual ingredient as needed
          productLeftCount: 0, // Provide actual count as needed
          productVolume: 0, // Provide actual volume as needed
          createdAt: new Date(),
          updatedAt: new Date(),
        }}
        imagePath={image}
      />
      <tr>
        <td style={{ border: "none" }}>
          <div className="tabel-img">
            <img
              src={image}
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
              {title.length > 20 ? title.slice(0, 20) + ".." : title}
            </h5>
          </div>
        </td>
        {pageName === "pausedOrders" ? (
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
        ) : (
          ""
        )}

        <td style={{ border: "none" }}>
          <div className="tabel-text">
            <h6>
              <span>Size :</span> {size}
            </h6>
          </div>
        </td>
        <td style={{ border: "none" }}>
          <div className="tabel-text">
            <h6>${unitPrice} x 3 = $360</h6>
          </div>
        </td>
      </tr>
    </>
  );
}

export default CartItem;
