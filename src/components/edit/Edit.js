import React, { Component } from "react";
import { Form, Control } from "react-redux-form";
import { addBlog } from "../../actions/addAction";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../add/add.css";

class Edit extends Component {
  state = {
    post: null
  };
  handleSubmit({ title, description, tags, author, image }) {
    console.log(
    parseInt(this.props.match.params.id, 10),
      title.value,
      description.value,
      tags.value,
      author.value,
      image.value
    );
    const post = {
      id: parseInt(this.props.match.params.id, 10),
      title: title.value,
      description: description.value,
      tags: tags.value.split(","),
      author: author.value,
      image: image.value,
      published: true
    };
    this.props.addBlog(post);
    alert("Update Success");
    this.props.history.push(`/detail/${this.props.match.params.id}`);
  }

  handleOnChange = event => {
    //let post = this.state.post[event.target.name]
    this.setState({ post: event.target.value });
  };

  componentDidMount() {
    const post = this.props.posts.filter(
      p => p.id === parseInt(this.props.match.params.id, 10)
    );
    console.log(post);
    this.setState({ post: post[0] });
  }

  render() {
    if (this.state.post !== null) {
      const { title, description, tags, author, image } = this.state.post;
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
              value={title}
              onChange={this.handleOnChange}
            />
            <Control.textarea
              model=".description"
              placeholder="description"
              value={description}
              onChange={this.handleOnChange}
            />
            <Control.text
              model=".tags"
              placeholder="Category / Tags"
              value={tags}
              onChange={this.handleOnChange}
            />
            <Control.text
              model=".author"
              placeholder="Author"
              value={author}
              onChange={this.handleOnChange}
            />
            <Control.text
              model=".image"
              placeholder="Image URL Only"
              value={image}
              onChange={this.handleOnChange}
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
