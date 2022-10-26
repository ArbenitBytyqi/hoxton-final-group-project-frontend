export function Admin() {
  return (
    <div className="admin-page">
      <form className="post-book">
        <h3>Post a new Book</h3>
        <label>
          Title
          <input required></input>
        </label>
        <label>
          Description
          <textarea required></textarea>
        </label>
        <label>
          Image
          <input required></input>
        </label>
        <label>
          Published Year
          <input required></input>
        </label>
        <label>
          Price
          <input required></input>
        </label>
        <label>
          Discount Price
          <input></input>
        </label>
        <label>
          Stock
          <input required></input>
        </label>
        <label>
          Author
          <input required></input>
        </label>
        <label>
          Category
          <input required></input>
        </label>
        <button>Submit</button>
      </form>
      <form className="post-author">
      <h3>Post a New Author</h3>
        <label>
          Full Name
          <input required></input>
        </label>
        <label>
          Description
          <textarea required></textarea>
        </label>
        <label>
          Image
          <input required></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
