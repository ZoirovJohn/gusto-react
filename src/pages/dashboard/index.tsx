import Header from "../../components/header";
import Faq from "../../components/faq";
import AppPart from "../../components/app-part";
import Footer from "../../components/footer";
import logo from "../../assets/images/logo/footer-logo.svg";
import Breadcrumbs from "../../components/breadcrumbs";
import Layout from "../../components/dashboard/layout";

function Dashboard({ children }: { children?: React.ReactElement }) {
  return (
    <div>
      <Header className="header-two  header-three" logo={logo} />
      <main>
        <Breadcrumbs title="User Dashboard" address="User Dashboard" />
        <Layout children={children} />
        <Faq />
        <AppPart />
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
