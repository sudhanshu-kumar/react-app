import React from "react";
import "./Home.css";

import Card from "../cards/card";

const Home = (props) => {
  return (
    <div>
      <div className="header">
        <h2>Home</h2>
      </div>
      <div className="posts">
      {props.posts.map((post, index) => {
        return <Card key={index} post={post} />;
      })}
      </div>
    </div>
  );
};

export default Home;
