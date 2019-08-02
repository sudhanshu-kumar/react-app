// import React, { lazy, Suspense } from "react";
import React, { Component } from "react";
import "./Home.css";
import Card from "../cards/card";
import { sortByNewAdded } from "../../helpers/shortBlogs";
import { searchBlogs } from "../../helpers/searchBlogs";
import { getTitles } from "../../helpers/blogTitles";

//const Card = lazy(() => import("../cards/card"));

class Home extends Component {
  state = {
    search: ""
  };

  handleSearch = event => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  onClickListItem = event => {
    console.log(event.target.innerHTML);
    this.setState({ search: event.target.innerHTML });
  };

  render() {
    let filteredBlogs = searchBlogs(this.props.posts, this.state.search);
    let listOfFilteredTitles =
      getTitles(filteredBlogs).length < this.props.posts.length
        ? getTitles(filteredBlogs)
        : [];
    let newPosts = sortByNewAdded(filteredBlogs);
    let listClass = listOfFilteredTitles.length !== 0 ? "title-list" : "no-title-list"
    console.log("titles", listOfFilteredTitles);
    return (
      <div>
        <div className="header">
          <h2>Home</h2>
          <div>
            <input
              className="form-control search"
              id="search-box"
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.handleSearch}
              onBlur={(e) => console.log(e)}
            />
            <div className={listClass}>
              {listOfFilteredTitles.length !== 0
                ? listOfFilteredTitles.map((title, index) => {
                    return (
                      <div key={index} onClick={this.onClickListItem} className="list-item">
                        {title}
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
        <div className="posts">
          {newPosts.length < 1 ? (
            <div>No results found</div>
          ) : (
            newPosts.map((post, index) => {
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
