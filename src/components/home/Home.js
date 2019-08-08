// import React, { lazy, Suspense } from "react";
import React, { Component } from "react";
import "./Home.css";
import Card from "../cards/card";
import SearchBar from "../searchBar/SearchBar";
import { sortByNewAdded } from "../../helpers/shortBlogs";

//const Card = lazy(() => import("../cards/card"));

class Home extends Component {
  state = {
    searching: false,
    blogs: []
  };

  componentDidMount() {
    this.setState({ blogs: sortByNewAdded(this.props.posts) });
  }

  updateBlogsOnSearch = (updatedBlogs, searchText) => {
    if (searchText.length > 0)
      this.setState({ blogs: updatedBlogs, searching: true });
    else this.setState({ blogs: updatedBlogs, searching: false });
  };

  render() {
    const { blogs } = this.state;
    return (
      <div>
        <div className="header">
          <h2>Home</h2>
          <SearchBar
            posts={this.props.posts}
            updateBlogs={this.updateBlogsOnSearch}
          />
        </div>
        <div className="posts">
          {blogs.length < 1 ? (
            <div>No results found</div>
          ) : (
            blogs.map((post, index) => {
              return (
                // <Suspense fallback={<div>Loading...</div>}>
                <Card key={index} post={post} />
                // </Suspense>
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default Home;
