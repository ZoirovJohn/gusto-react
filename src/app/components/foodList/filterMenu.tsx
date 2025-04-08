import { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import { ProductInquiry } from "../../../lib/types/product";
import { setProducts } from "../../pages/all-food/slice";
import { useDispatch } from "react-redux";
import { ProductCollection } from "../../../lib/enums/product.enum";

function FilterMenu() {
  const dispatch = useDispatch();
  const [activeSec, setActiveSec] = useState("All Category");
  const [productSearch, setProductSearch] = useState<ProductInquiry>({
    page: 1,
    limit: 6,
    order: "createdAt",
    search: "",
  });
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const productService = new ProductService();
    const fetchProducts = async () => {
      productService
        .getProducts(productSearch)
        .then((data) => dispatch(setProducts(data)))
        .catch((err) => console.log(err));
    };
    fetchProducts();
  }, [productSearch]);

  useEffect(() => {
    if (searchText === "") {
      productSearch.search = "";
      setProductSearch({ ...productSearch });
    }
  }, [searchText]);

  /* HANDLERS */
  const handleActiveSection = (e: React.MouseEvent<HTMLElement>) => {
    setActiveSec((e.target as HTMLElement)?.innerText);
  };

  const searchCollectionHandlertoHandler = (category: string) => {
    if (category === "All Category")
      searchCollectionHandler(ProductCollection.ALL);
    else if (category === "Mexican")
      searchCollectionHandler(ProductCollection.MEXICANCUISINE);
    else if (category === "Italian")
      searchCollectionHandler(ProductCollection.ITALIANCUISINE);
    else if (category === "Junk Food")
      searchCollectionHandler(ProductCollection.JUNKFOOD);
    else if (category === "Salad")
      searchCollectionHandler(ProductCollection.SALAD);
    else if (category === "Drink")
      searchCollectionHandler(ProductCollection.DRINK);
    else if (category === "Other")
      searchCollectionHandler(ProductCollection.OTHER);
  };

  const searchCollectionHandler = (collection: ProductCollection) => {
    productSearch.page = 1;
    productSearch.productCollection = collection;
    setProductSearch({ ...productSearch });
  };

  const searchProductHandler = () => {
    productSearch.search = searchText;
    setProductSearch({ ...productSearch });
  };

  const categories = [
    "All Category",
    "Mexican",
    "Italian",
    "Junk Food",
    "Salad",
    "Drink",
    "Other",
  ];

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="filter-container">
          <div className="category-section">
            {categories.map((category) => (
              <div
                key={category}
                className={`category-item ${
                  activeSec === category ? "active" : ""
                }`}
                onClick={(e) => {
                  handleActiveSection(e),
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
            <button className="search-button">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={searchProductHandler}
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
