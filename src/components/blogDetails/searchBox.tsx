function SearchBox() {
  return (
    <div className="search-box">
      <div className="search-box-text">
        <h4>Search</h4>
      </div>

      <div className="search-box-item">
        <div className="search-box-inner">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput8"
            placeholder="Search"
          />

          <button type="submit" className="search-box-inner-btn">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
                  stroke="#D3D5DA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
