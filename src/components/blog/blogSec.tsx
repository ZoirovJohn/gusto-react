import Pagination from "../foodList/pagination";
import { blogs } from "../../data/blogs";
import BlogCard from "../cards/blogCard";

function BlogSec() {
  return (
    <section className="blog s-padding">
      <div className="container">
        <div className="row">
          {blogs?.map((blog) => (
            <BlogCard
              blog={blog}
              key={blog.id}
              className="pb-20 col-lg-4 col-md-6 "
            />
          ))}
        </div>
        <Pagination />
      </div>
    </section>
  );
}

export default BlogSec;
