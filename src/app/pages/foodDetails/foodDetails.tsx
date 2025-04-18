import logo from "../../../assets/images/logo/footer-logo.svg";
import Header from "../../components/header";
import Breadcrumbs from "../../components/breadcrumbs";
import Footer from "../../components/footer";
import FoodDescriptionSec from "../../components/foodDetails";

function FoodDetails() {
  return (
    <div>
      <Header className="header-two  header-three" logo={logo} />
      <main>
        <Breadcrumbs title="Food Details" address="Food Details" />
        <FoodDescriptionSec />
      </main>
      <Footer />
    </div>
  );
}

export default FoodDetails;
