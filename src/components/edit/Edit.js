import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Control, Errors } from "react-redux-form";
import { addBlog } from "../../actions/addAction";
import { fetchBlogs } from "../../actions/fetchActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../add/add.css";

const required = val => val && val.length
const minLength = len => val => val && val.length >= len 

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
      post.title = this.state.title.trim();
    } else {
      post.title = form.title.value.trim();
    }
    if (!form.hasOwnProperty("description")) {
      post.description = this.state.description.trim();
    } else {
      post.description = form.description.value.trim();
    }
    if (!form.hasOwnProperty("tags")) {
      post.tags = this.state.tags.trim().split(",");
    } else {
      post.tags = form.tags.value.trim().split(",");
    }
    if (!form.hasOwnProperty("author")) {
      post.author = this.state.author.trim();
    } else {
      post.author = form.author.value.trim();
    }
    if (!form.hasOwnProperty("image")) {
      post.image = this.state.image.trim();
    } else {
      post.image = form.image.value.trim();
    }
    console.log(post);
    this.props.addBlog(post);
    alert("Update Success");
    this.props.fetchBlogs();
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
      tags: post[0].tags,
      author: post[0].author,
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
            <Link to={`/detail/${this.props.match.params.id}`}>
              <i className="material-icons">arrow_back</i>
            </Link>
            <h2>Edit</h2>
            <div />
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
              validators={{ required, minLength: minLength(3) }}
            />
            <Errors model=".title" show="touched" messages={{ required: "required", minLength: "must be minimum 3 charcters" }} />
            <Control.textarea
              model=".description"
              placeholder="description"
              name="description"
              value={description}
              onChange={this.handleOnChange}
              updateOn="change"
              validators={{ required, minLength: minLength(3) }}
            />
            <Errors model=".description" show="touched" messages={{ required: "required", minLength: "must be minimum 3 charcters" }} /> 
            <Control.text
              model=".tags"
              placeholder="Category / Tags"
              name="tags"
              value={tags}
              onChange={this.handleOnChange}
              updateOn="change"
              validators={{ required, minLength: minLength(3) }}
            />
            <Errors model=".tags" show="touched" messages={{ required: "required", minLength: "must be minimum 3 charcters" }} />
            <Control.text
              model=".author"
              placeholder="Author"
              name="author"
              value={author}
              onChange={this.handleOnChange}
              updateOn="change"
              validators={{ required, minLength: minLength(3) }}
            />
            <Errors model=".author" show="touched" messages={{ required: "required", minLength: "must be minimum 3 charcters" }} />
            <Control.text
              model=".image"
              placeholder="Image URL Only"
              name="image"
              value={image}
              onChange={this.handleOnChange}
              updateOn="change"
              validators={{ required, minLength: minLength(3) }}
            />
            <Errors model=".image" show="touched" messages={{ required: "required", minLength: "must be minimum 3 charcters" }} />
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
    { addBlog, fetchBlogs }
  )(Edit)
);
