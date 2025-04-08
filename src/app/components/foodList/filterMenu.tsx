import { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import TabBtn from "./tabBtn";
import { ProductInquiry } from "../../../lib/types/product";
import { setProducts } from "../../pages/all-food/slice";
import { useDispatch } from "react-redux";

function FilterMenu() {
  const dispatch = useDispatch();
  const productService = new ProductService();
  const [activeSec, setActiveSec] = useState("All Category");

  const handleActiveSection = (e: React.MouseEvent<HTMLElement>) => {
    setActiveSec((e.target as HTMLElement)?.innerText);
  };

  useEffect(() => {
    // Fetch products when component mounts
    const fetchProducts = async () => {
      try {
        const productInquiry: ProductInquiry = {
          page: 1,
          limit: 12,
          order: "newest",
        };

        const productData = await productService.getProducts(productInquiry);
        dispatch(setProducts(productData));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  // Categories list
  const categories = [
    "All Category",
    "Thai Cuisine",
    "Mexican",
    "Italian",
    "Vegetarian",
    "Junk Food",
  ];

  // Custom CSS to be added to your global styles
  const styles = `
    .filter-container {
      display: flex;
      padding: 1rem;
      border-radius: 0.5rem;
      border: 1px solid #e5e7eb;
      background-color: white;
      margin-bottom: 1.5rem;
      justify-content: center;
      align-items: center;
    }
    
    .category-section {
      display: flex;
      justify-content: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }
    
    .category-item {
      padding: 0.625rem 1.25rem;
      border-radius: 1.5rem;
      font-size: 1rem;
      cursor: pointer;
      color: #4B5563;
      transition: all 0.2s ease;
      display: inline-block;
      font-weight: 500;
    }
    
    .category-item.active {
      background-color: #EF4444;
      color: white;
      font-weight: bold;
    }
    
    .category-item:hover:not(.active) {
      background-color: #F3F4F6;
    }
    
    .search-section {
      display: flex;
      align-items: center;
      position: relative;
      width: 250px;
      margin-left: 1rem;
    }
    
    .search-input {
      width: 100%;
      padding: 0.75rem 1rem;
      padding-right: 3rem;
      border-radius: 0.5rem;
      border: 1px solid #e5e7eb;
      background-color: #f9fafb;
    }
    
    .search-button {
      position: absolute;
      right: 8px;
      background-color: #EF4444;
      color: white;
      border: none;
      border-radius: 0.5rem;
      padding: 0.5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
    }
    
    .search-button svg {
      width: 20px;
      height: 20px;
    }
  `;

  return (
    <div className="row">
      <style>{styles}</style>
      <div className="col-lg-12">
        <div className="filter-container">
          {/* Centered Category Buttons */}
          <div className="category-section">
            {categories.map((category) => (
              <div
                key={category}
                className={`category-item ${
                  activeSec === category ? "active" : ""
                }`}
                onClick={handleActiveSection}
              >
                {category}
              </div>
            ))}
          </div>

          {/* Right side - Search */}
          <div className="search-section">
            <input
              type="text"
              className="search-input"
              placeholder="Enter keyword here"
            />
            <button className="search-button">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMenu;
