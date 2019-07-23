import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { fetchBlogs } from "./actions/fetchActions";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Popular from "./components/popular/Popular";
import Add from "./components/add/AddForm";
import Detail from "./components/details/Detail";
import Footer from "./components/footer/footer";

class App extends Component {
  componentDidMount() {
    this.props.fetchBlogs();
  }

  render() {
    console.log(this.props);
    if (!this.props.error) {
      return (
        <div className="App">
          <BrowserRouter>
            <div>
              <Route
                path="/"
                component={() => <Home posts={this.props.blogs} />}
                exact
              />
              <Route
                path="/popular"
                component={() => <Popular posts={this.props.blogs} exact />}
                exact
              />
              <Route path="/add" component={Add} exact />
              <Route path="/" component={Footer} />
              <Route path="/detail/:id" component={Detail} exact />
            </div>
          </BrowserRouter>
        </div>
      );
    } else {
      return <h2>Error Occurred: {this.props.error}</h2>
    }
  }
}

const mapStateToProps = state => {
  return {
    blogs: state.postReducer.blogs,
    error: state.postReducer.error
  };
};

export default connect(
  mapStateToProps,
  { fetchBlogs }
)(App);
