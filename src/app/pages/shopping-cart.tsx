import logo from "../../assets/images/logo/footer-logo.svg";
import Header from "../components/header";
import Breadcrumbs from "../components/breadcrumbs";
import Footer from "../components/footer";
import ShoppingCartSec from "../components/shoppingCart";
import { useNavigate } from "react-router-dom";
import { useGlobals } from "../hooks/useGlobals";
import { useEffect } from "react";

function ShoppingCart() {
  const navigate = useNavigate();
  const { authMember } = useGlobals();

  useEffect(() => {
    if (!authMember) {
      navigate("/");
    }
  }, [authMember, navigate]);

  return (
    <div>
      <Header className="header-two  header-three" logo={logo} />
      <main>
        <Breadcrumbs title="Shopping Cart" address="Shopping Cart" />
        <ShoppingCartSec />
      </main>
      <Footer />
    </div>
  );
}

export default ShoppingCart;
