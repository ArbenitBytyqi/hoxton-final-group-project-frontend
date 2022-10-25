import "./BookDetails.css";
export function BookDetails() {
  return (
    <section className="book-detail main-wrapper">
      <img src="./assets/bookcover.jpg" alt="Book image" />
      <div className="book-detail__side">
        <h3></h3>
        <h2>Book Title</h2>
        <h4>Category:</h4>
        <p>
          (Description) Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Necessitatibus eum sunt et odio ipsum pariatur modi iusto
          officia dignissimos similique doloremque eligendi fugit, libero
          reprehenderit. Fuga, cupiditate! Sint, earum repudiandae.
        </p>

        <div></div>

        <button className="cart-button">Add to Cart</button>
      </div>
    </section>
  );
}
