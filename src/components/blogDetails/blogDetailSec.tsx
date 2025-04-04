import img1 from "../../assets/images/thumb/blog-details-box-1.png";
import img2 from "../../assets/images/thumb/blog-details-box-2.png";
import img3 from "../../assets/images/thumb/blog-details-img.png";
import img4 from "../../assets/images/icon/after-icon.png";

function BlogDetailSec() {
  return (
    <>
      <div className="blog-details-taitel">
        <h2>Exploring Culinary Delights and Gastronomic Adventures.</h2>

        <p>
          Embark on a delectable journey as we delve into the world of culinary
          delights and gastronomic adventures. Food is not just sustenance; it's
          an art that connects cultures, evokes memories, and stirs emotions. In
          this blog, we invite you to join us as we explore the fascinating
          realm of flavors, aromas, and the stories behind every dish. Whether
          you're a seasoned foodie or simply curious about the magic that
          happens in the kitchen, our culinary exploration promises to satisfy
          your appetite for knowledge and inspiration.
        </p>
      </div>

      <div className="blog-details-img blog-details-mt-32px">
        <img src={img3} alt="img" />
      </div>

      <div className="blog-details-text blog-details-mt-32px">
        <h4>The Art of Fusion:</h4>
        <h5>
          Discover the artistry of blending flavors and techniques from
          different cuisines. Explore how culinary fusion can result in unique
          and tantalizing dishes that transcend cultural boundaries. From
          Japanese-Peruvian fusion to modern twists on classic comfort foods,
          we'll take you on a global taste tour that celebrates the beauty of
          culinary creativity.
        </h5>
      </div>

      <div className="blog-details-text-box blog-details-mt-32px">
        <p>
          We can easily manage if we will only take, each days, the as burden
          it.But the load will be too heavy for us if we carry yesterday’s
          burdenour over again today.
        </p>

        <div className="blog-details-text-box-img">
          <img src={img4} className="w-100" alt="icon" />
        </div>
      </div>

      <div className="blog-details-text-box-text blog-details-mt-32px">
        <p>
          Prepare to be inspired, your taste buds to be tantalized, and your
          love for food to be reignited. Whether you're seeking new recipes,
          cultural insights, or a deeper appreciation for the art of cooking,
          our blog is your passport to a world of culinary delights and
          gastronomic adventures.
        </p>
      </div>

      <div className="row blog-details-mt-32px ">
        <div className="col-lg-6 col-md-6">
          <div className="blog-details-box-img">
            <img src={img1} className="w-100" alt="img" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="blog-details-box-img">
            <img src={img2} className="w-100" alt="img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetailSec;
