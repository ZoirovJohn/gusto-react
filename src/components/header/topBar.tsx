import TopBarDropDown from "./topBarDropDown";

function TopBar() {
  return (
    <div className="container">
      <div className="header-main">
        <div className="header-left">
          <div className="header-left-btn">
            <div className="icon">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7Z"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16 7C16 10.3137 12 15 10 15C8 15 4 10.3137 4 7C4 3.68629 6.68629 1 10 1C13.3137 1 16 3.68629 16 7Z"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M13.0003 13H14.1268C15.314 13 16.4397 13.5273 17.1997 14.4393L18.2667 15.7196C19.3522 17.0223 18.4259 19 16.7303 19H3.27042C1.57475 19 0.648436 17.0223 1.73398 15.7196L2.80096 14.4393C3.56093 13.5273 4.68672 13 5.87384 13H7.00034"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <TopBarDropDown />
          </div>
        </div>

        <div className="header-left-center">
          <p>
            It's the last day to save. The skills for now —{" "}
            <span>
              <a href="#">now on sale.</a>
            </span>
          </p>
        </div>

        <div className="header-right">
          <div className="header-right-item">
            <div className="header-right-inner">
              <div className="icon">
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.75 14.25V13.0155C15.75 12.4022 15.3766 11.8506 14.8071 11.6228L13.2815 11.0126C12.5571 10.7229 11.7316 11.0367 11.3828 11.7345L11.25 12C11.25 12 9.375 11.625 7.875 10.125C6.375 8.625 6 6.75 6 6.75L6.26551 6.61724C6.96328 6.26836 7.27714 5.44285 6.98741 4.71852L6.37717 3.19291C6.14937 2.62343 5.59781 2.25 4.98445 2.25H3.75C2.92157 2.25 2.25 2.92157 2.25 3.75C2.25 10.3774 7.62258 15.75 14.25 15.75C15.0784 15.75 15.75 15.0784 15.75 14.25Z"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              <div className="text">
                <a href="tel:+17077970462">+1 707 797 0462</a>
              </div>
            </div>
            <div className="header-right-inner">
              <div className="icon">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.66699 10V5.83333C1.66699 3.99238 3.15938 2.5 5.00033 2.5H15.0003C16.8413 2.5 18.3337 3.99238 18.3337 5.83333V14.1667C18.3337 16.0076 16.8413 17.5 15.0003 17.5H6.66699M5.00033 6.66667L8.15133 8.76733C9.27099 9.51378 10.7297 9.51378 11.8493 8.76733L15.0003 6.66667M1.66699 12.5H6.66699M1.66699 15H6.66699"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>

              <div className="text">
                <a href="mailto:Quomodosoft@gmail.com">Quomodosoft@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
