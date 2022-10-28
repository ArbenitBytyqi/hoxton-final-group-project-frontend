import { AiFillStar, AiOutlineStar } from "react-icons/ai";


export function Reviews({ selectedBook }: any) {
  return (
    <div className="reviews">
      <div>
      <div className="book-description">
        <img
          className="book-image_review"
          src={selectedBook.image}
        ></img>
        <div className="book-details">
          <h4>{selectedBook.title}</h4>
          {selectedBook.authors.map(author => <h4>{author.fullname}</h4>)}
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
          </div>
        </div>
      
    </div>
  );
}
