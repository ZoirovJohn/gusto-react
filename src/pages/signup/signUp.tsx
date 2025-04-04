import loginImg from "../../assets/images/thumb/login.png";
import logoHeader from "../../assets/images/logo/logo-header.svg";

import { useState } from "react";
import { Link } from "react-router-dom";
import ResetPassword from "../../components/signup/resetPassword";
import Verify from "../../components/signup/verify";
import CreateNew from "../../components/signup/createNew";
import SuccessFull from "../../components/signup/successFull";
import modalImf from "../../assets/images/small/modal-imf-7.png";

function SignUp() {
  const [modalOpen, setModalOpen] = useState("");
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
                You agree to ReservQ{" "}
                <Link to="/terms-service">
                  <span>Terms of Use & Privacy Policy.</span>
                </Link>
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
          <h2>Welcome back</h2>
          <p>Welcome back! Please enter your details.</p>
        </div>

        <div className="sign-up-from">
          <div className="sign-up-from-item">
            <div className="sign-up-from-inner">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput"
                placeholder="hi@example.com"
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

              <div className="icon">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5799 12.0019C15.5799 13.9819 13.9799 15.5819 11.9999 15.5819C10.0199 15.5819 8.41992 13.9819 8.41992 12.0019C8.41992 10.0219 10.0199 8.42188 11.9999 8.42188C13.9799 8.42188 15.5799 10.0219 15.5799 12.0019Z"
                      stroke="#9EA3AE"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9998 20.2688C15.5298 20.2688 18.8198 18.1887 21.1098 14.5887C22.0098 13.1787 22.0098 10.8087 21.1098 9.39875C18.8198 5.79875 15.5298 3.71875 11.9998 3.71875C8.46984 3.71875 5.17984 5.79875 2.88984 9.39875C1.98984 10.8087 1.98984 13.1787 2.88984 14.5887C5.17984 18.1887 8.46984 20.2688 11.9998 20.2688Z"
                      stroke="#9EA3AE"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="sign-up-from-inner">
              <div className="sign-up-from-df">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Remember me
                  </label>
                </div>

                <div className="sign-up-main-btn">
                  <button
                    type="button"
                    className="modal-sign-up-from-btn"
                    onClick={() => setModalOpen("reset")}
                  >
                    Forgot Password?
                  </button>
                  {/* <!-- Modal --> */}
                  <ResetPassword
                    modalOpen={modalOpen}
                    setModal={setModalOpen}
                  />
                  <Verify modalOpen={modalOpen} setModal={setModalOpen} />
                  <CreateNew modalOpen={modalOpen} setModal={setModalOpen} />
                  <SuccessFull modalOpen={modalOpen} setModal={setModalOpen} />
                  <div
                    className="modal fade"
                    id="exampleModal-7"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-six">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="modal-sign-up-img  ">
                            <img src={modalImf} alt="logo" />
                          </div>
                          <div className="modal-sign-up-text sign-up-text-to  ">
                            <h2>Your successfully changed your password</h2>
                            <p>
                              Setting up an account takes less than 1 minute.
                            </p>
                          </div>

                          <div className="btn-one-modal">
                            <button
                              type="button"
                              className=" main-btn-four "
                              data-bs-dismiss="modal"
                            >
                              Continue
                              <span>
                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 15 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip0_317_13742)">
                                    <path
                                      d="M1.41972 8.63898L11.0737 8.63898L7.30373 12.379C7.09177 12.5965 6.97314 12.8882 6.97314 13.192C6.97314 13.4957 7.09177 13.7875 7.30373 14.005C7.51841 14.217 7.80799 14.3359 8.10973 14.3359C8.41146 14.3359 8.70105 14.217 8.91573 14.005L14.6477 8.305C14.8528 8.0869 14.9669 7.79885 14.9669 7.49951C14.9669 7.20018 14.8528 6.91207 14.6477 6.69397L8.91573 0.993959C8.70105 0.781929 8.41146 0.663087 8.10973 0.663087C7.80799 0.663087 7.51841 0.781928 7.30373 0.993959C7.09659 1.20969 6.97748 1.49504 6.96973 1.79401C6.97267 2.09575 7.09238 2.3846 7.30373 2.59998L11.0737 6.35498L1.41972 6.35498C1.12309 6.36377 0.84155 6.48776 0.634836 6.70068C0.428121 6.91361 0.312501 7.19872 0.312501 7.49548C0.312501 7.79225 0.428121 8.07736 0.634835 8.29028C0.84155 8.50321 1.12309 8.6272 1.41972 8.63599L1.41972 8.63898Z"
                                      fill="white"
                                    />
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sign-up-btn">
              <div className="main-btn-four">
                <Link to="/">Sign Up</Link>
              </div>
              <div className="sign-up-btn-two">
                <a href="#">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M3.15283 7.3455L6.43833 9.755C7.32733 7.554 9.48033 6 11.9998 6C13.5293 6 14.9208 6.577 15.9803 7.5195L18.8088 4.691C17.0228 3.0265 14.6338 2 11.9998 2C8.15883 2 4.82783 4.1685 3.15283 7.3455Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M12.0002 22.0003C14.5832 22.0003 16.9302 21.0118 18.7047 19.4043L15.6097 16.7853C14.5719 17.5745 13.3039 18.0014 12.0002 18.0003C9.39916 18.0003 7.19066 16.3418 6.35866 14.0273L3.09766 16.5398C4.75266 19.7783 8.11366 22.0003 12.0002 22.0003Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                        fill="#1976D2"
                      />
                    </svg>
                  </span>
                  Contiue with Google
                </a>
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

export default SignUp;
