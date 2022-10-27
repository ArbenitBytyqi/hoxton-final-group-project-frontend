import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function Reviews({ selectedBook }: any) {
  return (
    <div className="reviews">
      <div className="book-part_review">
        <div className="book-description">
          <img
            className="book-image_review"
            src="https://m.media-amazon.com/images/I/71Le9HD+HuL.jpg"
          ></img>
          <div className="book-details">
          <h4>Book title</h4>
          <h4>Book author</h4>
          </div>
        </div>
        <form
          className="leave-review"
          onSubmit={(event) => {
            event.preventDefault();

            const stars = [
              ...document.querySelectorAll('input[name="star"]:checked'),
            ].map((input) => input.value);

            let rating = {
              stars: stars.length,
              review: event.target.review.value
            };

            console.log(rating)
          }}
        >
          <div className="stars-review">
            Leave a rating:
            <label>
              <input type="checkbox" name="star" value="star"></input>
              <span>
                <AiOutlineStar />
              </span>
            </label>
            <label>
              <input type="checkbox" name="star" value="star"></input>
              <span>
                <AiOutlineStar />
              </span>
            </label>
            <label>
              <input type="checkbox" name="star" value="star"></input>
              <span>
                <AiOutlineStar />
              </span>
            </label>
            <label>
              <input type="checkbox" name="star" value="star"></input>
              <span>
                <AiOutlineStar />
              </span>
            </label>
            <label>
              <input type="checkbox" name="star" value="star"></input>
              <span>
                <AiOutlineStar />
              </span>
            </label>
          </div>
          <textarea placeholder="leave a review" name="review"></textarea>
          <button>submit</button>
        </form>
      </div>
      <div className="inner">
        <h1>Reviews</h1>
          <div className="col">
            <div className="review">
              <img src={review.user.image} alt="Person 1" />
              <div className="name">{review.user.fullname}</div>
              <div className="stars">
                {/* for i<stars given loop the filled stars */}
                <AiFillStar />
                <AiFillStar />
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                ullam eligendi culpa harum, eos quaerat autem minima maxime
                ducimus corporis dolores tempora, aut distinctio ab cumque
                impedit veniam vitae ea?
              </p>
            </div>
            <div className="review">
              <img src="./assets/p1.jpg" alt="Person 1" />
              <div className="name">Person 1 name:</div>
              <div className="stars">
                {/* for i<stars given loop the filled stars */}
                <AiFillStar />
                <AiFillStar />
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
  
  );
}
