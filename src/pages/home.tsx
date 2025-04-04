import Header from "../components/header";
import Hero from "../components/heros";
import Categories from "../components/categories";
import Promotions from "../components/promotions";
import FoodGrid from "../components/foodGrid";
import Process from "../components/Process";
import PopularFood from "../components/popularFood";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import AppPart from "../components/app-part";
import Footer from "../components/footer";
import logo from "../assets/images/logo/footer-logo.svg";

function Home() {
  return (
    <div>
      <Header className="header-two" logo={logo} />
      <main>
        <Hero />
        <Categories />
        <Promotions />
        <FoodGrid />
        <Process />
        <PopularFood />
        <Testimonials />
        <Faq />
        <AppPart />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
