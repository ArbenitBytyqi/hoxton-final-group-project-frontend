import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BookDetails.css";

export function BookDetails({ selectedBook, setSelectedAuthor }: any) {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="book-detail">
      <img
        src={selectedBook.image}
        alt="Book image"
        className="book-image"
      />
      <div className="book-detail__side">
        <h2 className="book-title">{selectedBook.title}</h2>
        {selectedBook.authors.map(author => <h4 className="author-name" onClick={() => {
          setSelectedAuthor(author)
          navigate("/author")
        }}>{author.fullname}</h4>)}
        <h4 className="published-year">{selectedBook.publishedYear}</h4>
        <h4 className="category">Category:</h4>
        <p className="book-description">{selectedBook.description}</p>
        <h3 className="book-price">{selectedBook.price}$</h3>
        <h3 className="stock">In Stock: {selectedBook.stock}</h3>
        <button className="cart-button">Add to Cart</button>
        <button className="cart-button" onClick={() => { navigate("/reviews") }}>Read Reviews</button>
      </div>
    </section>
  );
}
