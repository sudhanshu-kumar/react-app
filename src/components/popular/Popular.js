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
    const blogs = this.props.posts.slice(0, 10);
    this.setState({ blogs, noOfBlogs: 10 });
  }

  handleLoadMore = () => {
    const { noOfBlogs } = this.state;
    const { posts } = this.props;
    const totalLength = posts.length;
    if (noOfBlogs <= totalLength) {
      const lastPostIndex =
        noOfBlogs + 10 > totalLength ? totalLength : noOfBlogs + 10;
      const blogs = posts.slice(noOfBlogs, lastPostIndex);
      this.setState({
        blogs: [...this.state.blogs, ...blogs],
        noOfBlogs: lastPostIndex
      });
    }
  };
  render() {
    const sortedPosts = sortByLikes(this.state.blogs);
    console.log("state",this.state.noOfBlogs, "props", this.props.posts.length)
    return (
      <div>
        <div className="header">
          <h2>Popular</h2>
        </div>
        <div className="posts">
          {sortedPosts.map((post, index) => {
            return <Card key={index} post={post} />;
          })}
          {this.state.noOfBlogs < this.props.posts.length ? (
            <button className="btn btn-primary" onClick={this.handleLoadMore}>
              Load More...
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Popular;
