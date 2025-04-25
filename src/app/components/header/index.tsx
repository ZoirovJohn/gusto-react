import { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../../assets/images/logo/logo-header.svg";
import useSticky from "../../hooks";
import MobileNav from "./mobileNav";
import defaultLogo from "../../../assets/icons/default-user.svg";
import { useGlobals } from "../../hooks/useGlobals";
import MemberService from "../../services/MemberService";
import {
  sweetErrorHandling,
  sweetTopSuccessAlert,
} from "../../../lib/sweetAlert";
import { Messages, serverApi } from "../../../lib/config";
import NavButton from "./navButton";
import HeaderCart from "./cart";

function Header({ className, logo }: { className?: string; logo?: string }) {
  const isSticky = useSticky();
  const { authMember, setAuthMember } = useGlobals();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handlers for the logout menu
  const handleAvatarClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoutRequest = async () => {
    try {
      const member = new MemberService();
      await member.logout();

      await sweetTopSuccessAlert("success", 700);
      setAuthMember(null);
    } catch (err) {
      console.log(err);
      sweetErrorHandling(Messages.error1);
    }
  };

  return (
    <>
      <header className={`header ${className ? className : ""}`}>
        <nav className={`menu-bg ${isSticky ? "nav-bg" : ""}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {authMember ? (
                  <div className="nav-main">
                    <div className="menu">
                      <ul>
                        <Link to="/">
                          <img src={logo ? logo : logoImg} alt="logo" />
                        </Link>
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

                    <div className="nav-btn-main">
                      <div className="nav-btn-two">
                        <HeaderCart />
                      </div>
                    </div>

                    <div className="nav-login-btn-main">
                      <img
                        className="user-avatar"
                        src={
                          authMember?.memberImage
                            ? `${serverApi}/${authMember.memberImage}`
                            : defaultLogo
                        }
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          // paddingLeft: "10px",
                        }}
                        onClick={handleAvatarClick}
                      />
                      {isMenuOpen && (
                        <div className="logout-menu">
                          <button onClick={handleLogoutRequest}>Logout</button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="nav-main">
                    <div className="menu">
                      <ul>
                        <div className="logo">
                          <Link to="/">
                            <img src={logo ? logo : logoImg} alt="logo" />
                          </Link>
                        </div>
                        <NavButton title="Home" link="/" />
                        <NavButton title="Menu" link="/all-food" />
                        <NavButton title="Help" link="/help" />
                        <div className="nav-login-btn-main">
                          <Link to="/login" className="main-btn-four">
                            Log In
                          </Link>
                        </div>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      <MobileNav />

      {/* Inline CSS for the dropdown menu */}
      <style>
        {`
          .nav-login-btn-main {
            position: relative;
          }

          .logout-menu {
            position: absolute;
            top: 60px; /* Adjust this value based on your layout */
            right: 0;
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 150px;
            display: block;
          }

          .logout-menu button {
            background-color: transparent;
            border: none;
            padding: 10px;
            width: 100%;
            text-align: left;
            cursor: pointer;
          }

          .logout-menu button:hover {
            background-color: #f4f4f4;
          }

          .user-avatar {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}

export default Header;
