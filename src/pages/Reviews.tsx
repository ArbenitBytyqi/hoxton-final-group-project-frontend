import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./Reviews.css";

export function Reviews({ selectedBook }: any) {
  return (
    <div className="reviews">
      <div className="inner">
        <h1>Reviews:</h1>
        <div className="border"></div>
        <div className="row">
          {selectedBook.reviews.map(review => <div className="col">
            <div className="review">
              <img src={review.user.image} alt="Person 1" />
              <div className="name">{review.user.fullname}</div>
              <div className="stars">
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <p>{review.comment}</p>
            </div>
          </div>)}

          {/* <form>
            <input placeholder="Add a comment"/>
            <p><AiFillStar /></p> <input type="number"/>
            <button>Post</button>
          </form> */}
        </div>
      </div>
    </div>
  );
}
