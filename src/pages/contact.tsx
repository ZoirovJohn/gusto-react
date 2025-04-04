import Header from "../components/header";
import Breadcrumbs from "../components/breadcrumbs";
import Footer from "../components/footer";
import logo from "../assets/images/logo/footer-logo.svg";
import Faq from "../components/faq";
import ContactInfo from "../components/contact/contactInfo";
import Map from "../components/contact/map";

function Contact() {
  return (
    <div>
      <Header className="header-two  header-three" logo={logo} />
      <main>
        <Breadcrumbs title="Contact us" address="Contact us" />
        <ContactInfo />
        <Map />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
