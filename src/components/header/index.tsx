import NavButton from "./navButton";
import { Link } from "react-router-dom";
import NavSearch from "../forms/navSearch";
import HeaderCart from "./cart";
// import Loggedin from "./loggedin";
import logoImg from "../../assets/images/logo/logo-header.svg";
import useSticky from "../../hooks/useSticky";
import MobileNav from "./mobileNav";

function Header({ className, logo }: { className?: string; logo?: string }) {
  const isSticky = useSticky();
  return (
    <>
      <header className={`header ${className ? className : ""}`}>
        {/* menu part start */}

        <nav className={`menu-bg ${isSticky ? "nav-bg" : ""}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="nav-main">
                  <div className="nav-main">
                    <div className="logo">
                      <Link to="/">
                        <img src={logo ? logo : logoImg} alt="logo" />
                      </Link>
                    </div>

                    <div className="menu">
                      <ul>
                        <NavButton title="Home" link="/" />
                        <NavButton title="Menu" link="/all-food" />
                        <NavButton
                          title="Shopping Cart"
                          link="/shopping-cart"
                        />
                        <NavButton title="My Profile" link="/myprofile" />
                        <NavButton title="Help" link="/help" />
                      </ul>
                    </div>
                  </div>

                  <div className="nav-btn-main">
                    <NavSearch />

                    <div className="nav-btn-two">
                      <HeaderCart />
                      {/* if user logged in show this  */}
                      {/* <Loggedin /> */}
                    </div>
                  </div>

                  <div className="nav-login-btn-main">
                    <Link to="/login" className="main-btn-four">
                      Log In
                    </Link>
                    <Link to="/sign-up" className="main-btn">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <MobileNav />
    </>
  );
}

export default Header;
