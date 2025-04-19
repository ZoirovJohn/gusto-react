import loginImg from "../../assets/images/thumb/login.png";
import logoHeader from "../../assets/images/logo/logo-header.svg";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="sign-up-top">
      <div className="sign-up-main-two">
        <div className="sign-up-main-two-item">
          <div className="sign-up-img">
            <Link to="/">
              <img src={loginImg} alt="img" />
            </Link>
            <div className="sign-up-main-two-item-text">
              <p>
                You agree to Gusto <span>Terms of Use & Privacy Policy.</span>
                You don't need to consent as a condition of food, or buying any
                other goods or services. Message/data rates may apply.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sign-up-main">
        <div className="sign-up-logo">
          <Link to="/">
            <img src={logoHeader} alt="logo" />
          </Link>
        </div>
        <div className="sign-up-text">
          <h2>Welcome!</h2>
          <p>Please enter your details.</p>
        </div>

        <div className="sign-up-from">
          <div className="sign-up-from-item">
            <div className="sign-up-from-inner">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput"
                placeholder="Name"
              />
            </div>
            <div className="sign-up-from-inner">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Password
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Password"
              />
            </div>

            <div className="sign-up-btn">
              <div className="main-btn-four">
                <Link to="/">Log In</Link>
              </div>

              <p>
                Don’t have an account?
                <Link to="/sign-up">Sign up for free</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
