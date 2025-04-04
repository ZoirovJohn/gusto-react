import { useState } from "react";

function TopBarDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="location-btn">
      <div className="dropdown">
        <a
          className={`btn btn-secondary dropdown-toggle ${
            isOpen ? "show" : " "
          } `}
          href="#"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Dropdown link
        </a>

        <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>

      <div className="location-btn-icon">
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.83301 8.33203L9.99967 11.6654L14.1663 8.33203"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default TopBarDropDown;
