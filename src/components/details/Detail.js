import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Detail.css";
import "../cards/card.css";

class Detail extends Component {
  state = {
    post: null
  };

  componentDidMount() {
    axios
      .get("http://test.peppersquare.com/api/v1/article")
      .then(res => {
        console.log(res.data);
        const post = res.data.filter(
          p => p.id === parseInt(this.props.match.params.id, 10)
        );
        console.log(post);
        this.setState({ post: post[0] });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { post } = this.state;
    if (post !== null) {
      const date = new Date(post.created_at).getDate();
      const month = new Date(post.created_at).toLocaleString("default", {
        month: "short"
      });
      const year = new Date(post.created_at).getFullYear();
      return (
        <div>
          <div className="detail-head">
            <Link to="/">
              <i className="material-icons">arrow_back</i>
            </Link>
            <h2>Detail</h2>
            <div />
          </div>
          <div className="detail-card">
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
              <p className="card-text">{post.description}</p>
              <hr />
              <div className="likes">
                <i className="material-icons">favorite</i>{" "}
                <span>{post.likes}</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  }
}

export default Detail;
