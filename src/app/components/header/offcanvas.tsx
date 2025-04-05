import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/logo-header.svg";

function Offcanvas({
  isActive,
  close,
}: {
  isActive: boolean;
  close: () => void;
}) {
  return (
    <aside id="offcanvas-nav" className={isActive ? "open" : ""}>
      <nav className="m-nav">
        <button id="nav-cls-btn" onClick={close}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li className="dropdown">
            <Link to="#">Home </Link>

            <ul className="d-menu">
              <li>
                <Link to="/">Home-01 </Link>
              </li>
              <li>
                <Link to="/home-two">Home-02</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/all-food">Menu</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li className="dropdown">
            <Link to="#">Blog</Link>

            <ul className="d-menu">
              <li>
                <Link to="/blog">Blog </Link>
              </li>
              <li>
                <Link to="/blog-details">Blog-Details</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Offcanvas;
