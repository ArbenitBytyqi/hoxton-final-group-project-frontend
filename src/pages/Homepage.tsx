export function Homepage(){
    return(
        <div className="home">
        <input placeholder="Search"></input>
        <div className="newest-titles">
            <div className="list-book">
                <img src="https://m.media-amazon.com/images/I/71Le9HD+HuL.jpg"></img>
                <h3>Letters to Milena</h3>
                <p className="author">Franz Kafka</p>
                <h3>XX Price</h3>
                <button>See details</button>
            </div>
        </div>
        </div>
    )
}