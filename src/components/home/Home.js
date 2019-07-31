// import React, { lazy, Suspense } from "react";
import React from "react";
import "./Home.css";
import Card from "../cards/card";
import { sortByNewAdded } from "../../helpers/shortBlogs";

//const Card = lazy(() => import("../cards/card"));

const Home = ({ posts }) => {
  const newPosts = sortByNewAdded(posts);
  return (
    <div>
      <div className="header">
        <h2>Home</h2>
      </div>
      <div className="posts">
        {newPosts.map((post, index) => {
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
