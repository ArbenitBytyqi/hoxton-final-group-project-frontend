import { Link } from "react-router-dom";

export function Homepage() {
  return (
    //hardcoded until fetched from the server
    <div className="home">
      <input placeholder="Search"></input>
      <h1>Newest Titles</h1>
      <div className="titles">
        <div className="list-book">
          <img src="https://m.media-amazon.com/images/I/71Le9HD+HuL.jpg"></img>
          <h3>Letters to Milena</h3>
          <p className="author">Franz Kafka</p>
          <h3>XX Price</h3>
          <Link to={`/bookdetails`}>
            <button>See details</button>
          </Link>
        </div>
        <div className="list-book">
          <img src="https://m.media-amazon.com/images/I/71Le9HD+HuL.jpg"></img>
          <h3>Letters to Milena</h3>
          <p className="author">Franz Kafka</p>
          <h3>XX Price</h3>
          <button>See details</button>
        </div>
        <div className="list-book">
          <img src="https://m.media-amazon.com/images/I/71Le9HD+HuL.jpg"></img>
          <h3>Letters to Milena</h3>
          <p className="author">Franz Kafka</p>
          <h3>XX Price</h3>
          <button>See details</button>
        </div>
        <div className="list-book">
          <img src="https://m.media-amazon.com/images/I/71Le9HD+HuL.jpg"></img>
          <h3>Letters to Milena</h3>
          <p className="author">Franz Kafka</p>
          <h3>XX Price</h3>
          <button>See details</button>
        </div>
        <div className="list-book">
          <img src="https://m.media-amazon.com/images/I/71Le9HD+HuL.jpg"></img>
          <h3>Letters to Milena</h3>
          <p className="author">Franz Kafka</p>
          <h3>XX Price</h3>
          <button>See details</button>
        </div>
        <div className="list-book">
          <img src="https://m.media-amazon.com/images/I/71Le9HD+HuL.jpg"></img>
          <h3>Letters to Milena</h3>
          <p className="author">Franz Kafka</p>
          <h3>XX Price</h3>
          <button>See details</button>
        </div>
      </div>
      <h1>Top Rated</h1>
      <div className="titles">
        <div className="list-book">
          <img src="https://m.media-amazon.com/images/I/71Le9HD+HuL.jpg"></img>
          <h3>Letters to Milena</h3>
          <p className="author">Franz Kafka</p>
          <h3>XX Price</h3>
          <button>See details</button>
        </div>
        <div className="list-book">
          <img src="https://m.media-amazon.com/images/I/71Le9HD+HuL.jpg"></img>
          <h3>Letters to Milena</h3>
          <p className="author">Franz Kafka</p>
          <h3>XX Price</h3>
          <button>See details</button>
        </div>
        <div className="list-book">
          <img src="https://m.media-amazon.com/images/I/71Le9HD+HuL.jpg"></img>
          <h3>Letters to Milena</h3>
          <p className="author">Franz Kafka</p>
          <h3>XX Price</h3>
          <button>See details</button>
        </div>
        <div className="list-book">
          <img src="https://m.media-amazon.com/images/I/71Le9HD+HuL.jpg"></img>
          <h3>Letters to Milena</h3>
          <p className="author">Franz Kafka</p>
          <h3>XX Price</h3>
          <button>See details</button>
        </div>
        <div className="list-book">
          <img src="https://m.media-amazon.com/images/I/71Le9HD+HuL.jpg"></img>
          <h3>Letters to Milena</h3>
          <p className="author">Franz Kafka</p>
          <h3>XX Price</h3>
          <button>See details</button>
        </div>
        <div className="list-book">
          <img src="https://m.media-amazon.com/images/I/71Le9HD+HuL.jpg"></img>
          <h3>Letters to Milena</h3>
          <p className="author">Franz Kafka</p>
          <h3>XX Price</h3>
          <button>See details</button>
        </div>
      </div>
    </div>
  );
}
