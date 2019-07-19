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
        this.setState({
          title: "",
          description: "",
          tags: "",
          author: "",
          image: ""
        });
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
            value={this.state.title}
          />
          <textarea
            name="description"
            placeholder="description"
            onChange={this.onChangeText}
            value={this.state.description}
          />
          <input
            type="text"
            name="tags"
            placeholder="Category / Tags"
            onChange={this.onChangeText}
            value={this.state.tags}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            onChange={this.onChangeText}
            value={this.state.author}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL Only"
            onChange={this.onChangeText}
            value={this.state.image}
          />
          <input type="submit" value="PUBLISH" />
        </form>
      </div>
    );
  }
}

export default Add;
