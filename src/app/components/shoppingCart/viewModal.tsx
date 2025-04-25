import image from "../../../assets/images/thumb/featured-1.png";

function ViewModal({ isOpen, close }: { isOpen: boolean; close: () => void }) {
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
                <img src={image} className="w-100" alt="featured-thumb" />
              </div>
            </div>

            <div className="modal-body-text">
              <h3>Eggplant Baked with Cheese </h3>
              <h5>$30.00</h5>
            </div>

            <div className="modal-body-item-box">
              <div className="together-box-item">
                <div className="form-check">
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault2"
                  >
                    Nan ($10.00)
                  </label>
                </div>
              </div>
              <div className="together-box-item">
                <div className="form-check">
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault3"
                  >
                    Extra Chess ($5.00)
                  </label>
                </div>
              </div>

              <div className="together-box-inner-btn">
                <div className="modal-main">
                  <div className="grid-text">
                    <p>Select Quantity</p>
                  </div>
                  <div className="grid">
                    <button className="btn btn-minus ">
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <div className="column product-qty">2</div>
                    <button className="btn btn-plus ">
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>

                <div className="modal-main modal-main-two ">
                  <div className="grid-text">
                    <p>Total Price</p>
                  </div>
                  <div className="together-box-inner-btn-dropdown">
                    <h4 style={{ fontWeight: "600" }}> $40</h4>
                  </div>
                </div>
              </div>

              <div className="together-box-inner-btn-btm">
                <a href="#" className="main-btn-six" tabIndex={-1}>
                  Apply Changes
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
