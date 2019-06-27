import React from "react";
import "./card.css";

const Card = props => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://researchandbibliographywebquest.files.wordpress.com/2014/08/book-shelf.jpg"
        alt="Card image cap"
      />
      <div className="card-body">
        <h3 className="card-title">Quick Brown Fox Jump Over</h3>
        <div className="card-sub-title">
          <h5>TRAVELLING</h5>
          <h5>16 AUG 2016</h5>
        </div>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <hr />
        <h5 className="likes">Likes 150</h5>
      </div>
    </div>
  );
};

export default Card;
