import React from "react";
import "./card.css";

const Card = ({ post }) => {
  console.log(new Date(post.created_at))
  const date = new Date(post.created_at).getDate()
  const month = new Date(post.created_at).toLocaleString('default', { month: 'short' })
  const year = new Date(post.created_at).getFullYear()
  return (
    <div className="card">
      <img className="card-img-top" src={post.image} alt="Card image cap" />
      <div className="card-body">
        <h3 className="card-title">{post.title}</h3>
        <div className="card-sub-title">
          <h5>{post.tags[0]}</h5>
          <h5>{date} {month} {year}</h5>
        </div>
        <p className="card-text">{post.description}</p>
        <hr />
        <h5 className="likes">Likes {post.likes}</h5>
      </div>
    </div>
  );
};

export default Card;
