import BlogDetailSec from "./blogDetailSec";
import ShareSec from "./shareSec";
import Comment from "./comment";
import commentImg1 from "../../assets/images/small/comments-1.png";
import commentImg2 from "../../assets/images/small/comments-2.png";
import commentImg3 from "../../assets/images/small/comments-3.png";
import commentImg4 from "../../assets/images/small/comments-4.png";
import CommentForm from "./commentForm";
import Sidebar from "./sidebar";

function BlogCom() {
  return (
    <section className="blog-details s-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <BlogDetailSec />

            <ShareSec tags={["FoodMenu", "ReservQ", "Restaurant"]} />

            <div className="row">
              <div className="col-lg-11">
                <div className="comment-box">
                  <div className="comment-box-head">
                    <h2>03 Comments</h2>
                  </div>
                  <Comment
                    comment={{
                      authorImg: commentImg1,
                      authorName: "Michel Holder",
                      date: "June 1, 2022 at 11:27 AM",
                      description:
                        "Sure there isn't anything embarrassing hidden in the middles of text. All into a Some this erato Internet tend to repeat predefined chunks.",
                    }}
                  />
                  <Comment
                    comment={{
                      authorImg: commentImg2,
                      authorName: "Kathryn Murphy",
                      date: "June 1, 2022 at 11:27 AM",
                      description:
                        "Sure there isn't anything embarrassing hidden in the middles of text. All into a Some this erato Internet tend to repeat predefined chunks.",
                    }}
                    isReplay={true}
                  />
                  <Comment
                    comment={{
                      authorImg: commentImg3,
                      authorName: "Albert Flores",
                      date: "June 1, 2022 at 11:27 AM",
                      description:
                        "Sure there isn't anything embarrassing hidden in the middles of text. All into a Some this erato Internet tend to repeat predefined chunks.",
                    }}
                  />
                  <Comment
                    comment={{
                      authorImg: commentImg4,
                      authorName: "Leslie Alexander",
                      date: "June 1, 2022 at 11:27 AM",
                      description:
                        "Sure there isn't anything embarrassing hidden in the middles of text. All into a Some this erato Internet tend to repeat predefined chunks.",
                    }}
                  />
                </div>
              </div>
            </div>
            <CommentForm />
          </div>

          <Sidebar />
        </div>
      </div>
    </section>
  );
}

export default BlogCom;
