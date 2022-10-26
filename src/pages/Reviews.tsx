import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./Reviews.css";

export function Reviews() {
  return (
    <div className="reviews">
      <div className="inner">
        <h1>Reviews:</h1>
        <div className="border"></div>
        <div className="row">
          <div className="col">
            <div className="review">
              <img src="./assets/p1.jpg" alt="Person 1" />
              <div className="name">Person 1 name:</div>
              <div className="stars">
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                ullam eligendi culpa harum, eos quaerat autem minima maxime
                ducimus corporis dolores tempora, aut distinctio ab cumque
                impedit veniam vitae ea?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
