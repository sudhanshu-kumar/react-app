import React, { lazy, Suspense } from "react";
import "./Home.css";
import Card from "../cards/card";

//const Card = lazy(() => import("../cards/card"));

const Home = props => {
  return (
    <div>
      <div className="header">
        <h2>Home</h2>
      </div>
      <div className="posts">
        {props.posts.map((post, index) => {
          return (
            // <Suspense fallback={<div>Loading...</div>}>
              <Card key={index} post={post} />
            // </Suspense>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
