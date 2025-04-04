function Comment({
  comment,
  isReplay,
}: {
  comment: {
    authorImg: string;
    authorName: string;
    date: string;
    description: string;
  };
  isReplay?: boolean;
}) {
  const { authorImg, authorName, date, description } = comment;
  return (
    <div
      className={`comment-box-item ${isReplay ? "comment-box-item-two" : ""} `}
    >
      <div className="comment-box-item-inner">
        <div className="comment-box-item-img">
          <img src={authorImg} alt="img" />
        </div>

        <div className="comment-box-item-text">
          <div className="comment-box-item-text-item">
            <h5>{authorName}</h5>

            <h4>
              <a href="#">{date}</a>
            </h4>
          </div>
          <p>{description}</p>

          <div className="comment-box-item-btn">
            <a href="#">Reply</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
