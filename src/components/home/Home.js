import React, { Component } from "react";
//import axios from "axios";
import Card from "../cards/card";

class Home extends Component {
  state = {};

  //   componentDidMount() {
  //     axios
  //       .get("http://test.peppersquare.com/api/v1/article")
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data);
  //       })
  //       .catch(err => console.log(err));
  //   }

  render() {
    return (
      <div>
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Home;
