import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { fetchBlogs } from "./actions/fetchActions";
import { BrowserRouter, Route } from "react-router-dom";
import { ReactComponent as Svg } from "./index.lava-lamp-preloader.svg";
import Home from "./components/home/Home";
import Popular from "./components/popular/Popular";
import Add from "./components/add/AddForm";
import Detail from "./components/details/Detail";
import Edit from "./components/edit/Edit";
import Footer from "./components/footer/footer";

class App extends Component {
  componentDidMount() {
    this.props.fetchBlogs();
  }

  render() {
    if (this.props.fetched) {
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
              <Route path="/detail/:id/edit" component={() => <Edit posts={this.props.blogs} exact />}/>
            </div>
          </BrowserRouter>
        </div>
      );
    } else {
      return (
        <div>
          {this.props.error ? (
            <h2>Error: {this.props.error}</h2>
          ) : (
            <div className="loading">
              <Svg className="svg" />
            </div>
          )}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    blogs: state.postReducer.blogs.data,
    fetched: state.postReducer.blogs.fetched,
    error: state.postReducer.error
  };
};

export default connect(
  mapStateToProps,
  { fetchBlogs }
)(App);
