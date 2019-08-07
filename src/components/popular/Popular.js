import React from "react";
import "../home/Home.css";
import Card from "../cards/card";
import { sortByLikes } from "../../helpers/shortBlogs";

class Popular extends React.Component {
  state = {
    blogs: [],
    noOfBlogs: 0
  };

  componentDidMount() {
    const blogs = this.props.posts.slice(0, 6);
    this.setState({ blogs, noOfBlogs: 6 });
  }

  handleLoadMore = () => {
    const blogs = this.props.posts.slice(
      this.state.noOfBlogs,
      this.state.noOfBlogs + 6
    );
    this.setState({
      blogs: [...this.state.blogs, ...blogs],
      noOfBlogs: this.state.noOfBlogs + 6
    });
  };
  render() {
    const sortedPosts = sortByLikes(this.state.blogs);
    return (
      <div>
        <div className="header">
          <h2>Popular</h2>
        </div>
        <div className="posts">
          {sortedPosts.map((post, index) => {
            return <Card key={index} post={post} />;
          })}
          <button className="btn btn-primary" onClick={this.handleLoadMore}>
            Load More...
          </button>
        </div>
      </div>
    );
  }
}

export default Popular;
