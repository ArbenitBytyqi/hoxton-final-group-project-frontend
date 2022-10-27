export function Author({ selectedAuthor }: any) {
  return (
    <div className="author-page">
      <img src={selectedAuthor.image} className="author-pic"></img>
      <div className="author-details">
        <h2>{selectedAuthor.fullname}</h2>
        <h4>Genres</h4>
        <p>{selectedAuthor.description}</p>
        <h3>Author's name books</h3>
        <ul>
          {selectedAuthor.books.map(book => <li>
            <img src={book.image} className="cart-book"></img>
            <p>{book.title}</p>
          </li>
          )}
        </ul>
      </div>
    </div>
  )
}