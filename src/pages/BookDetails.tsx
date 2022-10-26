import { AiOutlineStar } from "react-icons/ai";
import "./BookDetails.css";

export function BookDetails() {
  return (
    <>
      <section className="book-detail main-wrapper">
        <img
          src="./assets/bookcover.jpg"
          alt="Book image"
          className="book-image"
        />

        <div className="book-detail__side">
          <h2 className="book-title">Book Title</h2>
          <h4 className="author-name">Author Name</h4>
          <h4 className="published-year">Published: 26.08.2022</h4>
          <h4 className="category">Category:</h4>
          <p className="book-description">
            (Description) Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Necessitatibus eum sunt et odio ipsum pariatur modi iusto
            officia dignissimos similique doloremque eligendi fugit, libero
            reprehenderit. Fuga, cupiditate! Sint, earum repudiandae.
          </p>
          <h3 className="book-price">12.99$</h3>
          <h3 className="stock">In Stock</h3>

          <button className="cart-button">Add to Cart</button>
        </div>
      </section>
    </>
  );
}
