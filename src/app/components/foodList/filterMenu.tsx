import { useEffect, useRef, useState } from "react";
import ProductService from "../../services/ProductService";
import { ProductInquiry } from "../../../lib/types/product";
import { setProducts } from "../../pages/all-food/slice";
import { useDispatch, useSelector } from "react-redux";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { useParams } from "react-router-dom";
import { RootState } from "../../store"; // Adjust the path if needed

function FilterMenu() {
  const dispatch = useDispatch();
  const { component } = useParams();
  const currentPage = useSelector(
    (state: RootState) => state.productsPage.currentPage
  ); // Get current page from Redux
  const [activeSec, setActiveSec] = useState("Mexican");
  const [searchText, setSearchText] = useState<string>("");

  const [productSearch, setProductSearch] = useState<ProductInquiry>({
    page: currentPage, // Use currentPage from Redux
    limit: 6,
    order: "createdAt",
    search: "",
    productCollection: ProductCollection.MEXICANCUISINE,
  });

  const buttonRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const categories = [
    "Mexican",
    "Italian",
    "Burger",
    "Sandwich",
    "Pizza",
    "Salad",
    "Desert",
    "Drink",
  ];

  useEffect(() => {
    if (component) {
      setActiveSec(component);
      if (buttonRefs.current[component]) {
        buttonRefs.current[component]?.click();
      }
    }
  }, [component]);

  useEffect(() => {
    const productService = new ProductService();
    productService
      .getProducts(productSearch)
      .then((data) => dispatch(setProducts(data)))
      .catch((err) => console.log(err));
  }, [productSearch]);

  useEffect(() => {
    if (searchText === "") {
      productSearch.search = "";
      setProductSearch({ ...productSearch });
    }
  }, [searchText]);

  useEffect(() => {
    // Update productSearch page when currentPage changes
    setProductSearch((prevSearch) => ({
      ...prevSearch,
      page: currentPage,
    }));
  }, [currentPage]);

  const handleActiveSection = (e: React.MouseEvent<HTMLElement>) => {
    setActiveSec((e.target as HTMLElement)?.innerText);
  };

  const searchCollectionHandlertoHandler = (category: string) => {
    if (category === "Mexican")
      searchCollectionHandler(ProductCollection.MEXICANCUISINE);
    else if (category === "Italian")
      searchCollectionHandler(ProductCollection.ITALIANCUISINE);
    else if (category === "Burger")
      searchCollectionHandler(ProductCollection.BURGER);
    else if (category === "Sandwich")
      searchCollectionHandler(ProductCollection.SANDWICH);
    else if (category === "Pizza")
      searchCollectionHandler(ProductCollection.PIZZA);
    else if (category === "Salad")
      searchCollectionHandler(ProductCollection.SALAD);
    else if (category === "Desert")
      searchCollectionHandler(ProductCollection.DESSERT);
    else if (category === "Drink")
      searchCollectionHandler(ProductCollection.DRINK);
  };

  const searchCollectionHandler = (collection: ProductCollection) => {
    productSearch.page = 1; // Reset to page 1 when changing category
    productSearch.productCollection = collection;
    setProductSearch({ ...productSearch });
  };

  const searchProductHandler = () => {
    productSearch.search = searchText;
    setProductSearch({ ...productSearch });
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="filter-container">
          <div className="category-section">
            {categories.map((category) => (
              <div
                key={category}
                ref={(el) => (buttonRefs.current[category] = el)} // 🔗 store ref
                className={`category-item ${
                  activeSec === category ? "active" : ""
                }`}
                onClick={(e) => {
                  handleActiveSection(e);
                  searchCollectionHandlertoHandler(category);
                }}
              >
                {category}
              </div>
            ))}
          </div>

          <div className="search-section">
            <input
              type="text"
              className="search-input"
              placeholder="Enter keyword here"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") searchProductHandler();
              }}
            />
            <button className="search-button" onClick={searchProductHandler}>
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
