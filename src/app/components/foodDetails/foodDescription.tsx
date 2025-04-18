import { useState } from "react";
import { Link } from "react-router-dom";
import commentImg1 from "../../../assets/images/small/comments-1.png";
import commentImg2 from "../../../assets/images/small/comments-2.png";
import commentImg3 from "../../../assets/images/small/comments-3.png";
import CommentForm from "./commentForm";
import Comment from "./comment";
import VideoPlayer from "./videoPlayer";

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

        <hr />
      </ul>
      <div className="tab-content">
        <div
          className={`tab-pane fade ${
            activeDescription === "Food Details" ? "show active" : ""
          }`}
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="food-details-text">
                <p>
                  Indulge in a mouthwatering culinary delight with our Chicken
                  Skewers paired with vibrant slices of sweet bell peppers.
                  Tender pieces of succulent chicken are marinated to
                  perfection, resulting in a flavorful and juicy experience.{" "}
                </p>
              </div>
            </div>
          </div>
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
            <Comment
              authorImage={commentImg1}
              authorName="Michel Holder"
              authorProfession="Dog Trainer"
              date="June 1, 2022 at 11:27 AM"
              comment="Sure there isn't anything embarrassing hidden in the middles of text. All into a Some this erato Internet tend to repeat predefined chunks."
            />
            <Comment
              authorImage={commentImg2}
              authorName="Kathryn Murphy"
              authorProfession="Dog Trainer"
              date="June 1, 2022 at 11:27 AM"
              comment="Sure there isn't anything embarrassing hidden in the middles of text. All into a Some this erato Internet tend to repeat predefined chunks."
            />
            <Comment
              authorImage={commentImg3}
              authorName="Albert Flores"
              authorProfession="Dog Trainer"
              date="June 1, 2022 at 11:27 AM"
              comment="Sure there isn't anything embarrassing hidden in the middles of text. All into a Some this erato Internet tend to repeat predefined chunks."
            />

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
