function CommentForm() {
  return (
    <div className="row">
      <div className="col-lg-11">
        <div className="comment-from-box-main">
          <div className="comment-from-box-text">
            <h3>Leave a Comment</h3>

            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>

          <div className="from-box">
            <div className="from-item">
              <div className="from-inner-df">
                <div className="from-inner">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput6"
                    placeholder="Name"
                  />
                </div>
                <div className="from-inner">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput7"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="from-inner-two  ">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea3"
                  rows={5}
                  placeholder="Message Here"
                ></textarea>
              </div>

              <div className="from-btn">
                <a href="#" className="main-btn-four">
                  Submit Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
