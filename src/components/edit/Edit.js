import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Control, Errors } from "react-redux-form";
import { addBlog, resetForm } from "../../actions/addAction";
import Error404 from "../common/Error404";
import { fetchBlogs } from "../../actions/fetchActions";
import { required, minLength, imageURL } from "../../helpers/validators";
import { initialFormState } from "../../reducers/formReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../add/add.css";
class Edit extends Component {
  state = {
    loading: true
  };

  handleSubmit(form) {
    console.log("form data", form);
    const post = { id: this.props.match.params.id, published: true };
    post.title = form.title.trim();
    post.description = form.description.trim();
    post.tags = form.tags.trim().split(",");
    post.author = form.author.trim();
    post.image = form.image.trim();
    this.props.addBlog(post);
    this.props.resetForm();
    alert("Update Success");
    this.props.fetchBlogs();
    this.props.history.push(`/detail/${this.props.match.params.id}`);
  }

  componentDidMount() {
    if (/^[1-9]\d*$/g.test(this.props.match.params.id)) {
      let post = this.props.posts.filter(
        p => p.id === parseInt(this.props.match.params.id, 10)
      );
      if (post.length < 1) this.setState({ loading: null });
      if (post.length > 0) {
        this.setState({ loading: false });
        initialFormState.title = post[0].title;
        initialFormState.description = post[0].description;
        initialFormState.tags = post[0].tags.join(",");
        initialFormState.author = post[0].author;
        initialFormState.image = post[0].image;
      }
    } else {
      this.setState({ loading: null })
    }
  }

  render() {
    if (this.state.loading === false) {
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
            validateOn="submit"
          >
            <Control.text
              className="form-control"
              id="title"
              model=".title"
              placeholder="Title"
              name="title"
              defaultValue={initialFormState.title}
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
              defaultValue={initialFormState.description}
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
              defaultValue={initialFormState.tags}
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
              defaultValue={initialFormState.author}
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
              defaultValue={initialFormState.image}
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
    } else if (this.state.loading === true) {
      return <h1>Loading...</h1>;
    } else {
      return <Error404 />;
    }
  }
}

export default withRouter(
  connect(
    null,
    { addBlog, fetchBlogs, resetForm }
  )(Edit)
);
