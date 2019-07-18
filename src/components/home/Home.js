import React, { Component } from "react";
import "./Home.css";

import Card from "../cards/card";

const Home = ({ posts }) => {
  return (
    <div>
      <div className="header">
        <h2>Home</h2>
      </div>
      <div className="posts">
      {posts.map((post, index) => {
        return <Card key={index} post={post} />;
      })}
      </div>
    </div>
  );
};

export default Home;
