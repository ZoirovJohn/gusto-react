import LatestBlogCard from "../cards/latestBlogCard";
import img1 from "../../assets/images/small/latest-blog-1.png";
import img2 from "../../assets/images/small/latest-blog-2.png";
import img3 from "../../assets/images/small/latest-blog-3.png";
import img4 from "../../assets/images/small/latest-blog-4.png";
import promobanner1 from "../../assets/images/thumb/promobanner-01.png";
import promobanner2 from "../../assets/images/thumb/promobanner-02.png";
import SocialLinksCard from "../cards/socialLinksCard";
import SearchBox from "./searchBox";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="col-lg-4 blog-details-pl ">
      <SearchBox />
      <div className="latest-blog-box">
        <div className="latest-blog-box-text">
          <h3>Latest Blog</h3>
        </div>

        <div className="latest-blog-box-item">
          <LatestBlogCard
            blog={{
              img: img1,
              title: "Flavorful Fusion: Exploring the Art of Culinary Blending",
              link: "#",
              date: "31 May 2022",
            }}
          />
          <LatestBlogCard
            blog={{
              img: img2,
              title: "Chef Spotlight: Behind the Scenes of Culinary Mastery",
              link: "#",
              date: "31 May 2022",
            }}
          />
          <LatestBlogCard
            blog={{
              img: img3,
              title: "Time-Honored Recipes with a Modern Twist",
              link: "#",
              date: "31 May 2022",
            }}
          />
          <LatestBlogCard
            blog={{
              img: img4,
              title: "Exploring Authentic Cuisine from Around the World",
              link: "#",
              date: "31 May 2022",
            }}
          />
        </div>
      </div>
      <SocialLinksCard />
      <div className="blog-details-promobanner">
        <Link to="/all-food">
          <img src={promobanner1} className="w-100" alt="img" />
        </Link>
      </div>
      <div className="blog-details-promobanner-two">
        <Link to="/all-food">
          <img src={promobanner2} className="w-100" alt="img" />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
