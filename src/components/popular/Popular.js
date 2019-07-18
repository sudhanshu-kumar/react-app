import React from "react";
import "../home/Home.css";
import Card from "../cards/card";

const Popular = props => {
  const sortedPosts = [...props.posts].sort((a, b) => b.likes - a.likes);
  return (
    <div>
      <div className="header">
        <h2>Popular</h2>
      </div>
      <div className="posts">
        {sortedPosts.map((post, index) => {
          return <Card key={index} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
