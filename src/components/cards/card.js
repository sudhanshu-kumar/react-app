import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { ReactComponent as Svg } from "../../index.lava-lamp-preloader.svg";
//import { formatDate } from "../../helpers/dateFormatter";
import { descriptionShortener } from "../../helpers/shortDescription";
import "./card.css";

const Card = ({ post }) => {
  if (post) {
    //const { date, month, year } = formatDate(post.created_at);
    const shortDescription = descriptionShortener(post.description);
    return (
      <div className="card">
        <Link to={`/detail/${post.id}`} className="link">
          <div className="author">{post.author}</div>
          <img className="card-img-top" src={post.image} alt="no-pic" />
          <div className="card-body">
            <h3 className="card-title">{post.title}</h3>
            <div className="card-sub-title">
              <div>
                {post.tags.map((tag, index) => {
                  return (
                    <span className="card-tags" key={index}>
                      {tag}{" "}
                    </span>
                  );
                })}
              </div>
              <span className="date">
                {moment(post.created_at).fromNow()}
                {/* {date} {month} {year} */}
              </span>
            </div>
            {shortDescription.length === 1 ? (
              <p className="card-text">{shortDescription}</p>
            ) : (
              <p className="card-text">{shortDescription}...</p>
            )}
            <hr />
            <div className="likes">
              <i className="material-icons">favorite</i>{" "}
              <span>{post.likes}</span>
            </div>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="loading">
        <Svg className="svg" />
      </div>
    );
  }
};

export default Card;
