import Header from "../../components/header";
import Footer from "../../components/footer";
import logo from "../../../assets/images/logo/footer-logo.svg";
import Breadcrumbs from "../../components/breadcrumbs";
import Layout from "../../components/dashboard/layout";
import { useNavigate } from "react-router-dom";
import { useGlobals } from "../../hooks/useGlobals";
import { useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const { authMember } = useGlobals();

  useEffect(() => {
    if (!authMember) {
      navigate("/");
    }
  }, [authMember, navigate]);

  return (
    <div>
      <Header className="header-two header-three" logo={logo} />
      <main>
        <Breadcrumbs title="My Profile" address="My Profile" />
        <Layout />
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
