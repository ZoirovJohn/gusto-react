import { Link } from "react-router-dom";

function AddNewAddress() {
  return (
    <div className="col-lg-8 col-md-6 ">
      <div className="row">
        <div className="col-lg-12">
          <div className="shopping-cart-new-address-top-item">
            <div className="shopping-cart-new-address-taitel">
              <h4>Add new Address</h4>
            </div>

            <div className="shopping-cart-new-address-top-btn">
              <Link to="/shopping-cart-address">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 8H15C17.2091 8 19 9.79086 19 12V12C19 14.2091 17.2091 16 15 16H5M5 8L9 5M5 8L9 11"
                      stroke="#394150"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Back
              </Link>
            </div>
          </div>

          <div className="shopping-cart-new-address-from">
            <div className="shopping-cart-new-address-from-item">
              <div className="shopping-cart-new-address-from-inner">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput7"
                  placeholder="First Name"
                />
              </div>
              <div className="shopping-cart-new-address-from-inner">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput8"
                  placeholder="Last  Name"
                />
              </div>
            </div>
            <div className="shopping-cart-new-address-from-item">
              <div className="shopping-cart-new-address-from-inner">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput9"
                  placeholder="First Name"
                />
              </div>
              <div className="shopping-cart-new-address-from-inner">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput10"
                  placeholder="Last  Name"
                />
              </div>
            </div>
            <div className="shopping-cart-new-address-from-item">
              <div className="shopping-cart-new-address-from-inner">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Country
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Bangladesh</option>
                  <option value="2">India</option>
                  <option value="3">Usa</option>
                </select>
              </div>
              <div className="shopping-cart-new-address-from-inner">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  State
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>State</option>

                  <option value="2">India</option>
                  <option value="3">Usa</option>
                </select>
              </div>
            </div>
            <div className="shopping-cart-new-address-from-item">
              <div className="shopping-cart-new-address-from-inner">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  City
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>City</option>
                  <option value="2">Dhaka</option>
                  <option value="3">Usa</option>
                </select>
              </div>
              <div className="shopping-cart-new-address-from-inner">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput11"
                  placeholder="Address"
                />
              </div>
            </div>

            <div className="shopping-cart-new-address-from-btn">
              <div className="check-btn">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Home
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault1"
                  >
                    Office
                  </label>
                </div>
              </div>

              <div className="check-btn-two">
                <a href="#" className="main-btn-four">
                  Save now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewAddress;
