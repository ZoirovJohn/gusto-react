import Header from "../components/header";
import HeroV2 from "../components/heros/heroV2";
import CategoriesV2 from "../components/categories/categoriesV2";
import FeaturedFood from "../components/featuredFood";
import Testimonials from "../components/testimonials";
import Blogs from "../components/blog";
import Footer from "../components/footer";
import Map from "../components/contact/map";

function HomeTwo() {
  return (
    <div>
      <Header />
      <main>
        <HeroV2 />
        <CategoriesV2 />
        <FeaturedFood />
        <Testimonials />
        <Blogs />
        <Map />
      </main>
      <Footer />
    </div>
  );
}

export default HomeTwo;
