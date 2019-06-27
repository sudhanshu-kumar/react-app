import React, { Component } from "react";
import "./add.css";

class Add extends Component {
  state = {};
  render() {
    return (
      <div>
        <form className="form">
          <input type="text" placeholder="Title" />
          <textarea placeholder="description" />
          <input type="text" placeholder="Category / Tags" />
          <input type="text" placeholder="Author" />
          <input type="text" placeholder="Image URL Only" />
          <input type="submit" value="PUBLISH" />
        </form>
      </div>
    );
  }
}

export default Add;
