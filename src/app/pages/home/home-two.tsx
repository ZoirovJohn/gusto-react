import Header from "../../components/header";
import HeroV2 from "../../components/heros/heroV2";
import CategoriesV2 from "../../components/categories/categoriesV2";
import FeaturedFood from "../../components/featuredFood";
import Testimonials from "../../components/testimonials";
import Blogs from "../../components/blog";
import Footer from "../../components/footer";
import Map from "../../components/contact/map";
import { Dispatch } from "@reduxjs/toolkit";
import { Product } from "../../../lib/types/product";
import { setNewDishes } from "./slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductService from "../../services/ProductService";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
});

function HomeTwo() {
  const { setNewDishes } = actionDispatch(useDispatch());

  useEffect(() => {
    const product = new ProductService();

    product
      .getProducts({
        page: 1,
        limit: 6,
        order: "updatedAt",
        // productCollection: ProductCollection.DISH,
      })
      .then((data) => setNewDishes(data))
      .catch((err) => console.log(err));
  }, []);

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
