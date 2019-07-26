import React, { Component } from "react";
import { Form, Control } from "react-redux-form";
import { addBlog } from "../../actions/addAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../add/add.css";

class Edit extends Component {
  state = {
    post: null,
    title: "",
    description: "",
    tags: "",
    author: "",
    image: ""
  };

  handleSubmit = form => {
    const post = { id: this.props.match.params.id };
    if (!form.hasOwnProperty("title")) {
      post.title = this.state.title;
    } else {
      post.title = form.title.value;
    }
    if (!form.hasOwnProperty("description")) {
      post.description = this.state.description;
    } else {
      post.description = form.description.value;
    }
    if (!form.hasOwnProperty("tags")) {
      post.tags = this.state.tags.split(",");
    } else {
      post.tags = form.tags.value.split(",");
    }
    if (!form.hasOwnProperty("author")) {
      post.author = this.state.author;
    } else {
      post.author = form.author.value;
    }
    if (!form.hasOwnProperty("image")) {
      post.image = this.state.image;
    } else {
      post.image = form.image.value;
    }
    console.log(post);
    this.props.addBlog(post);
    alert("Update Success");
    this.props.history.push(`/detail/${this.props.match.params.id}`);
  };

  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    let post = this.props.posts.filter(
      p => p.id === parseInt(this.props.match.params.id, 10)
    );
    console.log(post);
    this.setState({
      title: post[0].title,
      description: post[0].description,
      tags: post[0].author,
      image: post[0].image
    });
  }

  render() {
    if (this.state.title !== null) {
      const { title, description, tags, author, image } = this.state;
      console.log(this.props);
      return (
        <div>
          <div className="header">
            <h2>Edit</h2>
          </div>
          <Form
            className="form"
            model="forms"
            onSubmit={post => this.handleSubmit(post.forms)}
          >
            <Control.text
              model=".title"
              placeholder="Title"
              name="title"
              value={title}
              onChange={this.handleOnChange}
            />
            <Control.textarea
              model=".description"
              placeholder="description"
              name="description"
              value={description}
              onChange={this.handleOnChange}
              updateOn="change"
            />
            <Control.text
              model=".tags"
              placeholder="Category / Tags"
              name="tags"
              value={tags}
              onChange={this.handleOnChange}
              updateOn="change"
            />
            <Control.text
              model=".author"
              placeholder="Author"
              name="author"
              value={author}
              onChange={this.handleOnChange}
              updateOn="change"
            />
            <Control.text
              model=".image"
              placeholder="Image URL Only"
              name="image"
              value={image}
              onChange={this.handleOnChange}
              updateOn="change"
            />
            <button type="submit">UPDATE</button>
          </Form>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default withRouter(
  connect(
    null,
    { addBlog }
  )(Edit)
);
