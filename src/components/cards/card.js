import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./card.css";

const Card = ({ post }) => {
  const date = new Date(post.created_at).getDate();
  const month = new Date(post.created_at).toLocaleString("default", {
    month: "short"
  });
  console.log(post);
  const year = new Date(post.created_at).getFullYear();
  const lastIdxOfSpace = post.description
    .toString()
    .substring(0, 41)
    .lastIndexOf(" ");
  const shortDescription = post.description
    .toString()
    .substring(0, lastIdxOfSpace);
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
                {moment(post.created_at).fromNow()}
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
