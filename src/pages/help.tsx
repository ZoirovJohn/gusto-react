import Header from "../components/header";
import Breadcrumbs from "../components/breadcrumbs";
import Footer from "../components/footer";
import logo from "../assets/images/logo/footer-logo.svg";
import Faq from "../components/faq";
import ContactInfo from "../components/contact/contactInfo";

function Help() {
  return (
    <div>
      <Header className="header-two  header-three" logo={logo} />
      <main>
        <Breadcrumbs title="Help Page" address="Help Page" />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default Help;
