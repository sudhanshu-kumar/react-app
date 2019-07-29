import React, { Component } from "react";
import { Form, Control } from "react-redux-form";
import { addBlog } from "../../actions/addAction";
import { connect } from "react-redux";
import "./add.css";

class Add extends Component {
  state = {
    title: null,
    description: null,
    tags: null,
    author: null,
    image: null
  };

  handleSubmit({ title, description, tags, author, image }) {
    console.log(title);
    if (!title || !title.value) this.setState({ title: "title is required" });
    if (!description) this.setState({ description: "description is required" });
    if (!tags) this.setState({ tags: "tags is required" });
    if (!author) this.setState({ author: "author is required" });
    if (!image) this.setState({ image: "image is required" });

    // console.log(
    //   title.value,
    //   description.value,
    //   tags.value,
    //   author.value,
    //   image.value
    // );
    // const post = {
    //   title: title.value,
    //   description: description.value,
    //   tags: tags.value.split(","),
    //   author: author.value,
    //   image: image.value,
    //   published: true
    // };
    // this.props.addBlog(post);
    // alert("Added Success");
    // this.props.history.push("/");
  }

  render() {
    console.log(this.state);
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
          {this.state.title ? <span>{this.state.title}</span> : null}
          <Control.textarea model=".description" placeholder="description" />
          {this.state.description ? (
            <span>{this.state.description}</span>
          ) : null}
          <Control.text model=".tags" placeholder="Category / Tags" />
          {this.state.tags ? <span>{this.state.tags}</span> : null}
          <Control.text model=".author" placeholder="Author" />
          {this.state.author ? <span>{this.state.author}</span> : null}
          <Control.text model=".image" placeholder="Image URL Only" />
          {this.state.image ? <span>{this.state.image}</span> : null}
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
