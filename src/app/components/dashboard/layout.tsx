import userImg from "../../../assets/images/small/dashboard-menu-profile-img.png";

function Layout() {
  return (
    <section className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div
                  className="dashboard-item-taitel"
                  style={{ marginLeft: "30px" }}
                >
                  <p></p>
                  <img src={userImg} alt="img" />
                  <div className="dashboard-menu-profile-text">
                    <p>Upload image: JPG, JPEG, PNG formats only!</p>
                  </div>
                </div>
                <div className="dashboard-edit-profile-from">
                  <div className="shopping-cart-new-address-from">
                    <div className="shopping-cart-new-address-from-item">
                      <div className="shopping-cart-new-address-from-inner">
                        <input
                          type="file"
                          name="default"
                          id="default"
                          className="border p-2"
                        />
                      </div>
                    </div>
                    <div className="shopping-cart-new-address-from-item">
                      <div className="shopping-cart-new-address-from-inner">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput11"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="shopping-cart-new-address-from-inner">
                        <label className="form-label">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput12"
                          placeholder="+82 10 7777 0000"
                        />
                      </div>
                    </div>
                    <div className="shopping-cart-new-address-from-item">
                      <div className="shopping-cart-new-address-from-inner">
                        <label className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput8"
                          placeholder="Email Address"
                        />
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
                          id="exampleFormControlInput13"
                          placeholder="Address"
                        />
                      </div>
                    </div>

                    <div className="shopping-cart-new-address-from-btn">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Layout;
