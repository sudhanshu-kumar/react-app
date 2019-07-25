import React, { Component } from "react";
import { Form, Control } from "react-redux-form";
import { addBlog } from "../../actions/addAction";
import { connect } from "react-redux";
import "./add.css";

class Add extends Component {
  handleSubmit({ title, description, tags, author, image }) {
    console.log(title.value, description.value, tags.value, author.value, image.value);
    const post = {
      title: title.value,
      description: description.value,
      tags: tags.value.split(","),
      author: author.value,
      image: image.value,
      published: true
    };
    this.props.addBlog(post);
    alert("Added Success");
    this.props.history.push('/');
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="header">
          <h2>Create</h2>
        </div>
        <Form
          className="form"
          model="forms"
          onSubmit={post => this.handleSubmit(post.forms)}
        >
          <Control.text model=".title" placeholder="Title" />
          <Control.textarea model=".description" placeholder="description" />
          <Control.text model=".tags" placeholder="Category / Tags" />
          <Control.text model=".author" placeholder="Author" />
          <Control.text model=".image" placeholder="Image URL Only" />
          <button type="submit">PUBLISH</button>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { addBlog }
)(Add);
