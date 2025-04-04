import Header from "../../components/header";
import Footer from "../../components/footer";
import logo from "../../assets/images/logo/footer-logo.svg";
import Breadcrumbs from "../../components/breadcrumbs";
import Layout from "../../components/dashboard/layout";

function Dashboard({ children }: { children?: React.ReactElement }) {
  return (
    <div>
      <Header className="header-two  header-three" logo={logo} />
      <main>
        <Breadcrumbs title="My Profile" address="My Profile" />
        <Layout children={children} />
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
