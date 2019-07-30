import React, { Component } from "react";
import { Form, Control, Errors } from "react-redux-form";
import { addBlog } from "../../actions/addAction";
import { connect } from "react-redux";
import { required, minLength, imageURL } from '../../helpers/validators';
import "./add.css";

class Add extends Component {

  handleSubmit({ title, description, tags, author, image }) {
    console.log(
      title.value,
      description.value,
      tags.value,
      author.value,
      image.value
    );
    const post = {
      title: title.value.trim(),
      description: description.value.trim(),
      tags: tags.value.trim().split(","),
      author: author.value.trim(),
      image: image.value.trim(),
      published: true
    };
    this.props.addBlog(post);
    alert("Added Success");
    this.props.history.push("/");
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
          <Control.text model=".title" placeholder="Title" validators={{ required, minLength: minLength(3) }} />
          <Errors model=".title" show="touched" messages={{ required: "required ", minLength: "must be minimum 3 characters long" }} />
          <Control.textarea model=".description" placeholder="description" validators={{ required, minLength: minLength(3) }} />
          <Errors model=".description" show="touched" messages={{ required: "required ", minLength: "must be minimum 3 characters long" }} />
          <Control.text model=".tags" placeholder="Category / Tags" validators={{ required, minLength: minLength(3) }} />
          <Errors model=".tags" show="touched" messages={{ required: "required ", minLength: "must be minimum 3 characters long" }} />
          <Control.text model=".author" placeholder="Author" validators={{ required, minLength: minLength(3) }}/>
          <Errors model=".author" show="touched" messages={{ required: "required ", minLength: "must be minimum 3 characters long" }} />
          <Control.text model=".image" placeholder="Image URL Only" validators={{ required, imageURL }}/>
          <Errors model=".image" show="touched" messages={{ required: "required ", imageURL: "invalid image url" }} />
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
