import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Svg } from "../../index.lava-lamp-preloader.svg";
import { fetchBlogDetails } from "../../actions/fetchActions";
import moment from "moment";
import "./Detail.css";
import "../cards/card.css";

class Detail extends Component {
  componentDidMount() {
    this.props.fetchBlogDetails(this.props.match.params.id);
  }
  render() {
    const { blogDetails: post } = this.props;
    if (this.props.fetched) {
      // const date = new Date(post.created_at).getDate();
      // const month = new Date(post.created_at).toLocaleString("default", {
      //   month: "short"
      // });
      // const year = new Date(post.created_at).getFullYear();
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
                  {moment(post.created_at).fromNow()}
                  {/* {date} {month} {year} */}
                </h5>
              </div>
              <p className="card-text">{post.description}</p>
              <hr />
              <div className="likes">
                <Link to={`/detail/${post.id}/edit`}>Edit</Link>
                <span>
                  <i className="material-icons">favorite</i>{" "}
                  <span>{post.likes}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <h2>
          <div className="loading">
            <Svg className="svg" />
          </div>
        </h2>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    blogDetails: state.postReducer.blogDetails.data,
    fetched: state.postReducer.blogDetails.fetched,
    error: state.postReducer.error
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchBlogDetails }
  )(Detail)
);
