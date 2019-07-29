import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
//import { formatDate } from "../../helpers/dateFormatter";
import { descriptionShortener } from "../../helpers/shortDescription";
import "./card.css";

const Card = ({ post }) => {
  //const { date, month, year } = formatDate(post.created_at);
  const shortDescription = descriptionShortener(post.description);
  return (
    <Link to={`/detail/${post.id}`} className="link">
      <div className="card">
        <img className="card-img-top" src={post.image} alt="no-pic" />
        <div className="card-body">
          <h3 className="card-title">{post.title}</h3>
          <div className="card-sub-title">
            <h5>
              {post.tags.map((tag, index) => {
                return <span key={index}>{tag} </span>;
              })}
            </h5>
            <div>
              <h5 className="date">
                {moment(post.created_at).calendar()}
                {/* {date} {month} {year} */}
              </h5>
            </div>
          </div>
          <p className="card-text">{shortDescription}...</p>
          <hr />
          <div className="likes">
            <i className="material-icons">favorite</i> <span>{post.likes}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
