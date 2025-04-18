import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../pages/all-food/slice"; // Adjust the import path
import { RootState } from "../../store"; // Adjust the path if needed

function Pagination() {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: RootState) => state.productsPage.currentPage
  );
  const totalPages = 10; // Set your total pages dynamically if needed

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      dispatch(setCurrentPage(page)); // Dispatch the current page to Redux
    }
  };

  return (
    <div className="row blog-mt-48px">
      <div className="col-lg-8 col-md-6">
        <div className="next-prev-btn">
          <ul>
            <li>
              <a
                onClick={() => handlePageChange(currentPage - 1)} // Go to previous page
                className="active"
              >
                <span>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 8L6 12M6 12L10 16M6 12L18 12"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                Previous
              </a>
            </li>
            <li>
              <a
                onClick={() => handlePageChange(currentPage + 1)} // Go to next page
                className="active"
              >
                Next
                <span>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 16L18 12M18 12L14 8M18 12L6 12"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item active" aria-current="page">
              <span className="page-link">{currentPage}</span>
            </li>

            <li className="page-item">
              <span className="page-link">of {totalPages}</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
