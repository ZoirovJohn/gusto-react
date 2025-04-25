import { useState } from "react";
import { Link } from "react-router-dom";
import CommentForm from "./commentForm";

import VideoPlayer from "./videoPlayer";
import { cartInfo } from "../../../lib/data/shoppingCarts";
import CartItem from "../header/cartItem";

function FoodDescription() {
  const [activeDescription, setActiveDescription] = useState("Food Details");

  return (
    <div className="food-details-item-box">
      <ul className="nav nav-pills">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link  ${
              activeDescription === "Food Details" ? "active" : ""
            }`}
            onClick={(e) =>
              setActiveDescription((e.target as HTMLElement)?.innerText)
            }
          >
            Food Details
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeDescription === "Food Video" ? "active" : ""
            }`}
            onClick={(e) =>
              setActiveDescription((e.target as HTMLElement)?.innerText)
            }
          >
            Food Video
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeDescription === "Review" ? "active" : ""
            }`}
            onClick={(e) =>
              setActiveDescription((e.target as HTMLElement)?.innerText)
            }
          >
            Review
          </button>
        </li>
        <hr />
      </ul>
      <div className="tab-content">
        <div
          className={`tab-pane fade ${
            activeDescription === "Food Details" ? "show active" : ""
          }`}
        >
          
        </div>
        <div
          className={`tab-pane fade ${
            activeDescription === "Food Video" ? "show active" : ""
          }`}
        >
          <div className="food-video-text">
            <p>
              In this vlog video, join us on a culinary journey as we create a
              mouthwatering dish that's perfect for any occasion - Grilled
              Chicken Skewers with Slices of Sweet Bell Peppers. Get ready to
              tantalize your taste buds as we showcase the step-by-step process
              of marinating tender chicken,
            </p>
          </div>
          <VideoPlayer />
          <div className="food-video-text-btm">
            <p>
              Join us in the kitchen as we share our passion for cooking and
              culinary creativity. Whether you're looking for a delightful
              appetizer, a flavorful main course, or simply a cooking
              inspiration, these Grilled Chicken Skewers with Slices of Sweet
              Bell Peppers are a must-try!
            </p>
            <p>
              <span>Note:</span> This is a fictional vlog video description and
              timestamps. You can adjust the content and timestamps based on
              your actual video footage and narration.
            </p>
          </div>
        </div>
        <div
          className={`tab-pane fade ${
            activeDescription === "Review" ? "show active" : ""
          }`}
        >
          <div className="food-review">
            <div className="food-review-item-btn">
              <Link to="/blog-details" className="main-btn">
                See more
              </Link>
            </div>
          </div>

          <CommentForm />
        </div>
      </div>
    </div>
  );
}

export default FoodDescription;
