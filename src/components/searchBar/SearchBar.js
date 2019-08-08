import React, { Component } from "react";
import { sortByNewAdded } from "../../helpers/shortBlogs";
import { searchBlogs } from "../../helpers/searchBlogs";
import { getTitles } from "../../helpers/blogTitles";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    search: "",
    listOfFilteredTitles: [],
    activeTitle: 0
  };

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
    this.props.updateBlogs(newPosts);
    this.setState({
      search: event.target.value,
      listOfFilteredTitles
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
      this.props.updateBlogs(newPosts);
      this.setState({
        activeTitle: 0,
        search: listOfFilteredTitles[activeTitle],
        listOfFilteredTitles: newList
      });
    } else if (event.keyCode === 40) {
      if (activeTitle + 1 === listOfFilteredTitles.length) {
        return;
      }
      this.setState({ activeTitle: activeTitle + 1 });
    } else if (event.keyCode === 38) {
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
    this.props.updateBlogs(newPosts);
    this.setState({
      search: event.target.innerText,
      listOfFilteredTitles
    });
  };

  render() {
    const { listOfFilteredTitles, activeTitle } = this.state;
    let listClass =
      listOfFilteredTitles.length !== 0 ? "title-list" : "no-title-list";
    return (
      <div>
        <input
          className="form-control search"
          id="search-box"
          type="text"
          placeholder="Search..."
          value={this.state.search}
          onChange={this.handleSearch}
          onKeyDown={this.handleKeyDown}
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
    );
  }
}

export default SearchBar;
