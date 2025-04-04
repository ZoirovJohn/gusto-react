import BlogCard from "../cards/blogCard";
import img1 from "../../assets/images/thumb/news-1.png";
import img2 from "../../assets/images/thumb/news-2.png";
import img3 from "../../assets/images/thumb/news-3.png";
import Slider from "../slider";

function Blogs() {
  return (
    <section className="our-latest-news s-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="news-taitel">
              <h2>Our Latest news</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="news-taitel-btn">
              <a href="#" className="main-btn-four">
                Browser All
              </a>
            </div>
          </div>
        </div>
        <Slider
          spaceBetween={30}
          centeredSlides={true}
          className="row news-slick red-pagination"
          pagination={true}
          freeMode={true}
          speed={500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          allowTouchMove={false}
          breakpoints={{
            1: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
        >
          <BlogCard
            blog={{
              id: 1,
              img: img1,
              title: "Stories, Media",
              readingTime: 3,
              description:
                "Exploring Culinary Delights and Gastronomic Adventures.",
            }}
            className="pb-72"
          />
          <BlogCard
            blog={{
              id: 2,
              img: img2,
              title: "Stories, Media",
              readingTime: 3,
              description: "Flavorful Fork: Exploring the World of Taste",
            }}
            className="pb-72"
          />
          <BlogCard
            blog={{
              id: 3,
              img: img3,
              title: "Stories, Media",
              readingTime: 3,
              description: "Hungry Wanderer, Global Flavors Explored.",
            }}
            className="pb-72"
          />
          <BlogCard
            blog={{
              id: 4,
              img: img1,
              title: "Stories, Media",
              readingTime: 3,
              description:
                "Exploring Culinary Delights and Gastronomic Adventures.",
            }}
            className="pb-72"
          />
          <BlogCard
            blog={{
              id: 5,
              img: img2,
              title: "Stories, Media",
              readingTime: 3,
              description: "Flavorful Fork: Exploring the World of Taste",
            }}
            className="pb-72"
          />
          <BlogCard
            blog={{
              id: 6,
              img: img3,
              title: "Stories, Media",
              readingTime: 3,
              description: "Hungry Wanderer, Global Flavors Explored.",
            }}
            className="pb-72"
          />
        </Slider>
      </div>
    </section>
  );
}

export default Blogs;
