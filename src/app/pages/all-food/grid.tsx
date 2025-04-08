import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import FoodCard from "../../components/cards/foodCard";
import { ProductInquiry } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { retrieveProducts } from "./selector";
import { setProducts } from "./slice";

function Grid() {
  const dispatch = useDispatch();
  const products = useSelector(retrieveProducts);
  const [loading, setLoading] = useState(true);
  const productService = new ProductService();

  useEffect(() => {
    // Fetch products when component mounts
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Define your product inquiry parameters
        const productInquiry: ProductInquiry = {
          page: 1,
          limit: 12,
          order: "newest", // or any default order you prefer
          // Add other optional parameters as needed
        };

        const productData = await productService.getProducts(productInquiry);
        dispatch(setProducts(productData));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div
      className="tab-pane fade show active"
      id="pills-home"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
    >
      <div className="row">
        {loading ? (
          <div className="col-12 text-center">Loading products...</div>
        ) : products && products.length > 0 ? (
          products.map((product) => (
            <FoodCard
              key={product._id}
              product={product}
              className="col-lg-4 col-md-6 featured-item-mt"
            />
          ))
        ) : (
          <div className="col-12 text-center">No products found</div>
        )}
      </div>
    </div>
  );
}

export default Grid;
