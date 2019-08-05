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
    search: "",
    listOfFilteredTitles: [],
    newPosts: [],
    activeTitle: 0
  };

  componentDidMount() {
    this.setState({ newPosts: sortByNewAdded(this.props.posts) });
  }

  handleSearch = event => {
    console.log(event.target);
    let searchString = event.target.value;
    let listOfFilteredTitles = [];
    let newPosts = sortByNewAdded(this.props.posts);
    if (searchString.length > 0) {
      let filteredBlogs = searchBlogs(this.props.posts, searchString);
      listOfFilteredTitles =
        filteredBlogs.length < newPosts.length ? getTitles(filteredBlogs) : [];
      newPosts = sortByNewAdded(filteredBlogs);
    }
    this.setState({
      search: event.target.value,
      listOfFilteredTitles,
      newPosts
    });
  };

  handleKeyDown = event => {
    const { activeTitle, listOfFilteredTitles } = this.state;
    console.log(event.keyCode);
    let newList = [];
    if (event.keyCode === 13) {
      let newPosts = sortByNewAdded(
        searchBlogs(this.props.posts, listOfFilteredTitles[activeTitle])
      );
      if (newPosts.length > 1) {
        newList = getTitles(newPosts);
      }
      this.setState({
        activeTitle: 0,
        search: listOfFilteredTitles[activeTitle],
        listOfFilteredTitles: newList,
        newPosts
      });
    }
    else if (event.keyCode === 40) {
      if (activeTitle + 1 === listOfFilteredTitles.length) {
        return;
      }
      this.setState({ activeTitle: activeTitle + 1 });
    }
    else if (event.keyCode === 38) {
      if (activeTitle === 0) {
        return;
      }
      this.setState({ activeTitle: activeTitle - 1 });
    }
  };

  onClickListItem = event => {
    console.log(event.target);
    let listOfFilteredTitles = [];
    let newPosts = sortByNewAdded(
      searchBlogs(this.props.posts, event.target.innerText)
    );
    if (newPosts.length > 1) {
      listOfFilteredTitles = getTitles(newPosts);
    }
    this.setState({
      search: event.target.innerText,
      listOfFilteredTitles,
      newPosts
    });
  };

  render() {
    const { listOfFilteredTitles, newPosts, activeTitle } = this.state;
    let listClass =
      listOfFilteredTitles.length !== 0 ? "title-list" : "no-title-list";
    console.log("titles", activeTitle);
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
              onKeyDown={this.handleKeyDown}
              // onBlur={e => (e.target.nextSibling.style.display = "none")}
              // onFocus={e => (e.target.nextSibling.style.display = "inline")}
            />
            <div className={listClass} onBlur={e => console.log(e)}>
              {listOfFilteredTitles.length !== 0
                ? listOfFilteredTitles.map((title, index) => {
                    let className = "list-item";
                    if (index === activeTitle) {
                      className = "list-item active-title";
                    }
                    return (
                      <div
                        key={index}
                        onClick={this.onClickListItem}
                        className={className}
                      >
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
