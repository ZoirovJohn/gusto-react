import CopyRight from "./copyRight";
import logo from "../../../assets/images/logo/footer-logo.svg";
import { Link } from "react-router-dom";
import { useGlobals } from "../../hooks/useGlobals";

function Footer() {
  const { authMember } = useGlobals();
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12" data-aos="fade-right">
              <div className="footer-logo">
                <div className="logo">
                  <img
                    src={logo}
                    alt="logo"
                    style={{
                      height: "auto",
                      objectFit: "contain",
                      marginLeft: "-150px",
                      marginRight: "-40px",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      width: "calc(100% + 0px)",
                    }}
                  />
                </div>
              </div>

              <div className="footer-text">
                <h4>
                  At Gusto, we invite you to embark on a journey of taste and
                  delight.Our tables are more than just places.
                </h4>
              </div>

              <div className="footer-icon">
                <div className="icon">
                  <a target="_blank">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a target="_blank">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mol-md-12 ">
              <div className="row">
                <div
                  className="col-lg-3 col-md-3"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <div className="quick-line-item">
                    <div className="quick-line-item-head">
                      <h3>Quick Link</h3>
                    </div>
                    {authMember ? (
                      <div className="quick-line-menu">
                        <ul>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/all-food">Menu</Link>
                          </li>
                          <li>
                            <Link to="/shopping-cart">Shopping cart</Link>
                          </li>
                          <li>
                            <Link to="/myprofile">My profile</Link>
                          </li>
                          <li>
                            <Link to="/help">Help</Link>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <div className="quick-line-menu">
                        <ul>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/all-food">Menu</Link>
                          </li>
                          <li>
                            <Link to="/help">Help</Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-3"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <div className="quick-line-item">
                    <div className="quick-line-item-head">
                      <h3>Terms & Privacy</h3>
                    </div>

                    <div className="quick-line-menu">
                      <ul>
                        <li>
                          <Link to="">Trust & Safety</Link>
                        </li>
                        <li>
                          <Link to="">Terms of Service</Link>
                        </li>
                        <li>
                          <Link to="">Privacy Policy</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <div className="quick-line-item">
                    <div className="quick-line-item-head">
                      <h3>Title: Contact Us</h3>
                    </div>

                    <div className="quick-line-menu">
                      <ul>
                        <li>
                          <Link to="">📧 Email: zoirovtokhirjon@gmail.com</Link>
                        </li>
                        <li>
                          <Link to="">📞 Phone: +82 (10) 8055-0867</Link>
                        </li>
                        <li>
                          <Link to="">
                            📍 Location: 60 Via del Poggio, 05015 Fabro, Italy
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <CopyRight />
    </>
  );
}

export default Footer;
