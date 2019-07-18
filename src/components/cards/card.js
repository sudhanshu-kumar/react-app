import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ post }) => {
  const date = new Date(post.created_at).getDate();
  const month = new Date(post.created_at).toLocaleString("default", {
    month: "short"
  });
  const year = new Date(post.created_at).getFullYear();
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
            <h5 className="date">
              {date} {month} {year}
            </h5>
          </div>
          <p className="card-text">
            {post.description.toString().substring(0, 41)}...
          </p>
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
