import Header from "../../components/header";
import Faq from "../../components/faq";
import Footer from "../../components/footer";
import logo from "../../../assets/images/logo/footer-logo.svg";
import Breadcrumbs from "../../components/breadcrumbs";
import FoodList from "../../components/foodList";

function AllFood({ children }: { children?: React.ReactElement }) {
  return (
    <div>
      <Header className="header-two  header-three" logo={logo} />
      <main>
        <Breadcrumbs title="All Food Menu" address="Food Details" />
        <FoodList children={children} />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default AllFood;
