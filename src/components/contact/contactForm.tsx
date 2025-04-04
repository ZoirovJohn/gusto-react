function ContactForm() {
  return (
    <div className="col-lg-7 col-md-6">
      <div className="contact-us-from">
        <form className="from">
          <div className="from-item">
            <div className="from-inner">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Max"
              />
            </div>
            <div className="from-inner">
              <label className="form-label">Last Name*</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="Mustermann"
              />
            </div>
          </div>
          <div className="from-item from-item-two ">
            <div className="from-inner">
              <label className="form-label">E-mail*</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput4"
                placeholder="Max"
              />
            </div>
            <div className="from-inner">
              <label className="form-label">Telephone*</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput5"
                placeholder="+49 123456789"
              />
            </div>
          </div>
          <div className="from-item from-item-two ">
            <div className="from-inner">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Description*
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={5}
                placeholder="Hier text ainfugen"
              ></textarea>
            </div>
          </div>

          <div className="from-btn">
            <a href="#" className="main-btn-four">
              Send now!
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
