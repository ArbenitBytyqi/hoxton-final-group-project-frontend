import { useState } from "react";
import { Link } from "react-router-dom";

export function Homepage({ allBooks, setSelectedBook }: any) {

  const [searchBooks, setSearchBooks] = useState('')
  const topRated: any = []

  for (let book of allBooks) {
    let sum = 0
    for (const review of book.reviews) {
      if (review.stars > 4.5) sum += review.stars
      let average = sum / book.reviews.length
      if (average > 3) topRated.push(book)
    }
  }

  const filteredBooks = allBooks.filter(filteredAllBooks => filteredAllBooks.title.toLowerCase().includes(searchBooks.toLowerCase()))
  console.log(`topRated`, topRated)
  console.log("searchBooks", filteredBooks)
  return (
    //hardcoded until fetched from the server
    <div className="home">
      <div className="search-title-input">
        <input
          type="text"
          name="search"
          placeholder="Search here..."
          onChange={event => {
            setSearchBooks(event.target.value)
            console.log("event", setSearchBooks)
          }}
        />

        <button>🔎</button>
      </div>
      <h1>Top Rated</h1>
      <div className="titles">
        {topRated.map(book => <div className="list-book">
          <img src={book.image}></img>
          <h3>{book.title}</h3>
          <p className="author">Franz Kafka</p>
          <h3>{book.price}</h3>
          <Link to={`/bookdetails`}>
            <button onClick={() => { setSelectedBook(book) }}>See details</button>
          </Link>
        </div>)}
      </div>
      <h1>Books</h1>
      <div className="titles">
        {filteredBooks.map(book => <div className="list-book">
          <img src={book.image}></img>
          <h3>{book.title}</h3>
          <p className="author">Franz Kafka</p>
          <h3>{book.price}</h3>
          <Link to={`/bookdetails`}>
            <button onClick={() => { setSelectedBook(book) }}>See details</button>
          </Link>
        </div>)}
      </div>
    </div>
  );
}
