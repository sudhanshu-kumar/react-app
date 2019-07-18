import React, { Component } from "react";
import axios from "axios";
import Card from "../cards/card";

class Home extends Component {
  state = {
    posts: []
  };

    componentDidMount() {
      axios
        .get("http://test.peppersquare.com/api/v1/article")
        .then((res) => {
          console.log(res.data);
          this.setState({ posts: res.data })
        })
        .catch(err => console.log(err));
    }

  render() {
    const { posts } = this.state
    return (
      <div>
        {posts.map((post, index) => {
          return <Card key={index} post={post}></Card>
        })}
      </div>
    );
  }
}

export default Home;
