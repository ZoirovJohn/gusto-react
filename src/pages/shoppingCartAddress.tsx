import logo from "../assets/images/logo/footer-logo.svg";
import Header from "../components/header";
import Breadcrumbs from "../components/breadcrumbs";
import AppPart from "../components/app-part";
import Footer from "../components/footer";
import CartAddress from "../components/cartAddress";

function ShoppingCartAddress() {
  return (
    <div>
      <Header className="header-two  header-three" logo={logo} />
      <main>
        <Breadcrumbs
          title="Shopping Cart Address"
          address="Shopping Cart Address"
        />
        <CartAddress />
        <AppPart />
      </main>
      <Footer />
    </div>
  );
}

export default ShoppingCartAddress;
