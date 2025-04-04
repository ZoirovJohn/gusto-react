function EditProfile() {
  return (
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
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput7"
              placeholder="Last  Name"
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
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput12"
              placeholder="+1 707 797 0462"
            />
          </div>
        </div>
        <div className="shopping-cart-new-address-from-item">
          <div className="shopping-cart-new-address-from-inner">
            <label className="form-label">Country</label>
            <select
              defaultValue={1}
              className="form-select"
              aria-label="Default select example"
            >
              <option value={1}>Bangladesh</option>
              <option value="2">India</option>
              <option value="3">Usa</option>
            </select>
          </div>
          <div className="shopping-cart-new-address-from-inner">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              State
            </label>
            <select
              className="form-select"
              defaultValue={1}
              aria-label="Default select example"
            >
              <option value={1}>State</option>

              <option value="2">India</option>
              <option value="3">Usa</option>
            </select>
          </div>
        </div>
        <div className="shopping-cart-new-address-from-item">
          <div className="shopping-cart-new-address-from-inner">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              City
            </label>
            <select
              className="form-select"
              defaultValue={1}
              aria-label="Default select example"
            >
              <option value={1}>City</option>
              <option value="2">Dhaka</option>
              <option value="3">Usa</option>
            </select>
          </div>
          <div className="shopping-cart-new-address-from-inner">
            <label htmlFor="exampleFormControlInput1" className="form-label">
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
          <div className="check-btn">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
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
              <label className="form-check-label" htmlFor="flexCheckDefault1">
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
  );
}

export default EditProfile;
