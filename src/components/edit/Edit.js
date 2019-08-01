import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Control, Errors } from "react-redux-form";
import { addBlog, resetForm } from "../../actions/addAction";
import { fetchBlogs } from "../../actions/fetchActions";
import { required, minLength, imageURL } from "../../helpers/validators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../add/add.css";
class Edit extends Component {
  state = {
    title: "",
    description: "",
    tags: "",
    author: "",
    image: ""
  };

  handleSubmit(form) {
    console.log("form data", form);
    const post = { id: this.props.match.params.id, published: true };
    // if (form.hasOwnProperty("title")) {
    post.title = form.title.trim();
    // } else {
    //   post.title = this.state.title.trim();
    // }
    // if (!form.hasOwnProperty("description")) {
    //   post.description = this.state.description.trim();
    // } else {
    post.description = form.description.trim();
    // }
    // if (!form.hasOwnProperty("tags")) {
    //   post.tags = this.state.tags.trim().split(",");
    // } else {
    post.tags = form.tags.trim().split(",");
    // }
    // if (!form.hasOwnProperty("author")) {
    //   post.author = this.state.author.trim();
    // } else {
    post.author = form.author.trim();
    // }
    // if (!form.hasOwnProperty("image")) {
    //   post.image = this.state.image.trim();
    // } else {
    post.image = form.image.trim();
    // }
    this.props.addBlog(post);
    this.props.resetForm();
    alert("Update Success");
    this.props.fetchBlogs();
    this.props.history.push(`/detail/${this.props.match.params.id}`);
  }

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
      console.log(this.state);
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
            model="postBlog"
            onSubmit={post => this.handleSubmit(post)}
          >
            <Control.text
              className="form-control"
              id="title"
              model=".title"
              placeholder="Title"
              name="title"
              value={title}
              onChange={this.handleOnChange}
              validators={{ required, minLength: minLength(3) }}
            />
            <Errors
              className="text-danger"
              model=".title"
              show="touched"
              messages={{
                required: "required, ",
                minLength: "must be minimum 3 characters"
              }}
            />
            <Control.textarea
              className="form-control"
              model=".description"
              placeholder="description"
              name="description"
              value={description}
              onChange={this.handleOnChange}
              validators={{ required, minLength: minLength(3) }}
            />
            <Errors
              className="text-danger"
              model=".description"
              show="touched"
              messages={{
                required: "required, ",
                minLength: "must be minimum 3 characters"
              }}
            />
            <Control.text
              className="form-control"
              model=".tags"
              placeholder="Category / Tags"
              name="tags"
              value={tags}
              onChange={this.handleOnChange}
              validators={{ required, minLength: minLength(3) }}
            />
            <Errors
              className="text-danger"
              model=".tags"
              show="touched"
              messages={{
                required: "required, ",
                minLength: "must be minimum 3 characters"
              }}
            />
            <Control.text
              className="form-control"
              model=".author"
              placeholder="Author"
              name="author"
              value={author}
              onChange={this.handleOnChange}
              validators={{ required, minLength: minLength(3) }}
            />
            <Errors
              className="text-danger"
              model=".author"
              show="touched"
              messages={{
                required: "required, ",
                minLength: "must be minimum 3 characters"
              }}
            />
            <Control.text
              className="form-control"
              model=".image"
              placeholder="Image URL Only"
              name="image"
              value={image}
              onChange={this.handleOnChange}
              validators={{ required, imageURL }}
            />
            <Errors
              className="text-danger"
              model=".image"
              show="touched"
              messages={{
                required: "required, ",
                imageURL: "invalid image URL"
              }}
            />
            <button type="submit" className="btn btn-primary">
              UPDATE
            </button>
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
    { addBlog, fetchBlogs, resetForm }
  )(Edit)
);
