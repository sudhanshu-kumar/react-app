import React, { Component } from "react";
import "./Home.css";

import Card from "../cards/card";

const Home = ({ posts }) => {
  return (
    <div>
      <div className="header">
        <h2>Home</h2>
      </div>
      {posts.map((post, index) => {
        return <Card key={index} post={post} />;
      })}
    </div>
  );
};

export default Home;
