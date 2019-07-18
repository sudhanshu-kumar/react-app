import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Add from "./components/add/AddForm";
import Detail from "./components/details/Detail";
import Footer from "./components/footer/footer";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("http://test.peppersquare.com/api/v1/article")
      .then(res => {
        console.log(res.data);
        this.setState({ posts: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route
              path="/"
              component={() => <Home posts={this.state.posts} />}
              exact
            />
            <Route path="/add" component={Add} exact />
            <Route path="/" component={Footer} />
            <Route path="/detail/:id" component={Detail} exact/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
