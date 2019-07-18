import React, { Component } from "react";
import axios from "axios";
import "./add.css";

class Add extends Component {
  state = {
    title: "",
    description: "",
    tags: [],
    author: "",
    image: ""
  };

  onChangeText = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onPublish = event => {
    event.preventDefault();
    const post = {
      title: this.state.title,
      description: this.state.description,
      tags: [this.state.tags],
      author: this.state.author,
      image: this.state.image,
      published: true
    };
    axios
      .post("http://test.peppersquare.com/api/v1/article", post)
      .then(res => {
        console.log(res.data, "post");
        alert("Published Success");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="header">
          <h2>Create</h2>
        </div>
        <form className="form" onSubmit={this.onPublish}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.onChangeText}
          />
          <textarea
            name="description"
            placeholder="description"
            onChange={this.onChangeText}
          />
          <input
            type="text"
            name="tags"
            placeholder="Category / Tags"
            onChange={this.onChangeText}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            onChange={this.onChangeText}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL Only"
            onChange={this.onChangeText}
          />
          <input type="submit" value="PUBLISH" />
        </form>
      </div>
    );
  }
}

export default Add;
