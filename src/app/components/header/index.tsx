import NavButton from "./navButton";
import { Link } from "react-router-dom";
import HeaderCart from "./cart";
// import Loggedin from "./loggedin";
import logoImg from "../../../assets/images/logo/logo-header.svg";
import useSticky from "../../hooks";
import MobileNav from "./mobileNav";
// import defaultLogo from "../../../assets/icons/default-user.svg"
import defaultLogo from "../../../assets/icons/default-user.svg";
import { useGlobals } from "../../hooks/useGlobals";
import MemberService from "../../services/MemberService";
import {
  sweetErrorHandling,
  sweetTopSuccessAlert,
} from "../../../lib/sweetAlert";
import { Messages } from "../../../lib/config";
import { useState } from "react";

function Header({ className, logo }: { className?: string; logo?: string }) {
  const isSticky = useSticky();
  const authMember = useGlobals();
  const { setAuthMember } = useGlobals();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  /** HANDLERS **/

  const handleLogoutClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseLogut = () => setAnchorEl(null);
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
                          <NavButton title="Help" link="/help" />
                          <NavButton title="My Profile" link="/myprofile" />
                        </ul>
                      </div>
                    </div>

                    <div className="nav-btn-main">
                      <div className="nav-btn-two">
                        <HeaderCart />
                      </div>
                    </div>

                    <div className="nav-login-btn-main">
                      <img
                        className="user-avatar"
                        src={defaultLogo}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "24px",
                          paddingLeft: "10px",
                        }}
                        aria-haspopup="true"
                        onClick={handleLogoutClick}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="nav-main">
                    <div className="menu">
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
                    </div>
                  </div>
                )}
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
