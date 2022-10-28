import { Link } from "react-router-dom";

export function Homepage({ allBooks, setSelectedBook }: any) {

  const topRated: any = []

  for (let book of allBooks) {
    let sum = 0
    for (const review of book.reviews) {
      if (review.stars > 4.5) sum += review.stars
      let average = sum / book.reviews.length
      if (average > 3) topRated.push(book)
    }
  }

  console.log(`topRated`, topRated)
  return (
    //hardcoded until fetched from the server
    <div className="home">
      <div className="search-title-input">
        <input
          type="text"
          name="search"
          placeholder="Search here..."
        // onChange={event => {
        //   setSearchBook(event.target.value)
        // }}
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
        {allBooks.map(book => <div className="list-book">
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
