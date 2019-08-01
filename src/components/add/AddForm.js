import React, { Component } from "react";
import { Form, Control, Errors } from "react-redux-form";
import { addBlog, resetForm } from "../../actions/addAction";
import { connect } from "react-redux";
import { required, minLength, imageURL } from '../../helpers/validators';
import "./add.css";

class Add extends Component {

  handleSubmit({ title, description, tags, author, image }) {
    console.log(
      title,
      description,
      tags,
      author,
      image
    );
    const post = {
      title: title.trim(),
      description: description.trim(),
      tags: tags.trim().split(","),
      author: author.trim(),
      image: image.trim(),
      published: true
    };
    this.props.addBlog(post);
    this.props.resetForm("postBlog");
    alert("Added Success");
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <div className="header">
          <h2>Create</h2>
        </div>
        <Form
          className="form"
          model="postBlog"
          onSubmit={post => this.handleSubmit(post)}
        >
          <Control.text className="form-control" id="title" name="title" model=".title" placeholder="Title" validators={{ required, minLength: minLength(3) }} />
          <Errors className="text-danger" model=".title" show="touched" messages={{ required: "Required, ", minLength: "Must be minimum 3 characters long" }} />
          <Control.textarea className="form-control" id="description" name="description" model=".description" placeholder="description" validators={{ required, minLength: minLength(3) }} />
          <Errors className="text-danger" model=".description" show="touched" messages={{ required: "Required, ", minLength: "Must be minimum 3 characters long" }} />
          <Control.text className="form-control" id="tags" name="tags" model=".tags" placeholder="Category / Tags" validators={{ required, minLength: minLength(3) }} />
          <Errors className="text-danger" model=".tags" show="touched" messages={{ required: "Required, ", minLength: "Must be minimum 3 characters long" }} />
          <Control.text className="form-control" id="author" name="author" model=".author" placeholder="Author" validators={{ required, minLength: minLength(3) }}/>
          <Errors className="text-danger" model=".author" show="touched" messages={{ required: "Required, ", minLength: "Must be minimum 3 characters long" }} />
          <Control.text className="form-control" id="image" name="image" model=".image" placeholder="Image URL Only" validators={{ required, imageURL }}/>
          <Errors className="text-danger" model=".image" show="touched" messages={{ required: "Required, ", imageURL: "Invalid image url" }} />
          <button type="submit" className="btn btn-primary">PUBLISH</button>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { addBlog, resetForm }
)(Add);
