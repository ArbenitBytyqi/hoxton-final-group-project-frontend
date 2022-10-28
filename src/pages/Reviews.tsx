import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function Reviews({
  selectedBook,
  setAllBooks,
  setSelectedBook,
  currentUser,
}: any) {
  console.log(selectedBook);
  return (
    <div className="reviews">
      <div>
        <div className="book-description">
          <img className="book-image_review" src={selectedBook.image}></img>
          <div className="book-details">
            <h4>{selectedBook.title}</h4>
            {selectedBook.authors.map((author) => (
              <h4>{author.fullname}</h4>
            ))}
          </div>
        </div>
        <form
          className="leave-review"
          onSubmit={(event) => {
            event.preventDefault();
            // const stars = [
            //   ...document.querySelectorAll('input[name="star"]:checked'),
            // ];

            // let rating = {
            //   stars: stars.length,
            //   review: event.target.review.value,
            // };
            console.log(stars.length);
            let newReview = {
              stars: 2,
              comment: event.target.comment.value,
              userId: currentUser.user?.id,
              bookId: selectedBook.id,
            };
            console.log("Test new review", newReview);
            fetch(`http://localhost:6677/reviews`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newReview),
            })
              .then((resp) => resp.json())
              .then((dataServer) => {
                if (dataServer) {
                  fetch(`http://localhost:6677/books`)
                    .then((resp) => resp.json())
                    .then((data) => {
                      setAllBooks(data);
                      data.map((book) =>
                        book.id === selectedBook.id
                          ? setSelectedBook(book)
                          : null
                      );
                    });
                } else alert(dataServer.error);
              });
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
          <textarea placeholder="leave a review" name="comment"></textarea>
          <button>submit</button>
        </form>
      </div>

      <div className="inner">
        <h1>Reviews:</h1>
        <div className="border"></div>
        <div className="row">
          {selectedBook.reviews.map((review) => (
            <div className="col">
              <div className="review">
                <img src={review.user?.image} alt="Person 1" />
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
