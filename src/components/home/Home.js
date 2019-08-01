// import React, { lazy, Suspense } from "react";
import React, { Component } from "react";
import "./Home.css";
import Card from "../cards/card";
import { sortByNewAdded } from "../../helpers/shortBlogs";
import { searchBlogs } from "../../helpers/searchBlogs";

//const Card = lazy(() => import("../cards/card"));

class Home extends Component {
  state = {
    search: ""
  }

  handleSearch = (event) => {
    console.log(event.target.value)
    this.setState({ search: event.target.value })
  }

  render() {
    let filteredBlogs = searchBlogs(this.props.posts, this.state.search);
    let newPosts = sortByNewAdded(filteredBlogs);
  return (
    <div>
      <div className="header">
        <h2>Home</h2>
        <div><input className="form-control" type="text" placeholder="Search..." value={this.state.search} onChange={this.handleSearch} /></div>
      </div>
      <div className="posts">
        {newPosts.length < 1 ? <div>No results found</div> : newPosts.map((post, index) => {
          return (
            // <Suspense fallback={<div>Loading...</div>}>
            <Card key={index} post={post} />
            // </Suspense>
          );
        })}
        
      </div>
    </div>
  );
  }
}

// const Home = ({ posts }) => {
//   const newPosts = sortByNewAdded(posts);
//   return (
//     <div>
//       <div className="header">
//         <h2>Home</h2>
//       </div>
//       <div className="posts">
//         {newPosts.map((post, index) => {
//           return (
//             // <Suspense fallback={<div>Loading...</div>}>
//             <Card key={index} post={post} />
//             // </Suspense>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

export default Home;
