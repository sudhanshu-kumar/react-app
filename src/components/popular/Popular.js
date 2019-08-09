import React from "react";
import "../home/Home.css";
import Card from "../cards/card";
import { sortByLikes } from "../../helpers/shortBlogs";
import SearchBar from "../searchBar/SearchBar";

class Popular extends React.Component {
  state = {
    searching: false,
    blogs: [],
    noOfBlogs: 0
  };

  componentDidMount() {
    const blogs = this.props.posts.slice(0, 10);
    this.setState({ blogs, noOfBlogs: 10 });
  }

  updateBlogsOnSearch = (updatedBlogs, searchText) => {
    if (searchText.length > 0)
      this.setState({ blogs: updatedBlogs, searching: true });
    else this.setState({ blogs: updatedBlogs, searching: false });
  };

  handleLoadMore = () => {
    const { noOfBlogs } = this.state;
    const posts = this.state.searching ? this.state.blogs : this.props.posts;
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
    return (
      <div>
        <div className="header">
          <h2>Popular</h2>
          <SearchBar
            posts={this.props.posts}
            updateBlogs={this.updateBlogsOnSearch}
          />
        </div>
        <div className="posts">
          {sortedPosts.map((post, index) => {
            return <Card key={index} post={post} />;
          })}
          {this.state.noOfBlogs <
          (this.state.searching
            ? this.state.blogs.length
            : this.props.posts.length) ? (
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
