export function Admin({ setAllBooks }: any) {
  return (
    <div className="admin-page">
      <form className="post-book" onSubmit={(e) => {
        e.preventDefault()
        const formData = {
          fullname: e.target.fullname.value,
          description: e.target.description.value,
          image: e.target.image.value
        }
        e.preventDefault()
        fetch(`http://localhost:6677/author`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
          .then(resp => resp.json())
          .then(dataServer => {
            if (dataServer) {
              fetch(`http://localhost:6677/books`)
                .then(resp => resp.json())
                .then(data => setAllBooks(data))

            }
            else alert(dataServer.error)

          })
      }}>
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
