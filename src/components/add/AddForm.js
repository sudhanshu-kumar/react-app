import React, { Component } from "react";
import { Form, Control } from "react-redux-form";
import { connect } from 'react-redux'
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

  onPublish = post => {
    console.log(post);

    // event.preventDefault();
    // const post = {
    //   title: this.state.title,
    //   description: this.state.description,
    //   tags: [this.state.tags],
    //   author: this.state.author,
    //   image: this.state.image,
    //   published: true
    // };
    // axios
    //   .post("http://test.peppersquare.com/api/v1/article", post)
    //   .then(res => {
    //     console.log(res.data, "post");
    //     this.setState({
    //       title: "",
    //       description: "",
    //       tags: "",
    //       author: "",
    //       image: ""
    //     });
    //     alert("Published Success");
    //   })
    //   .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="header">
          <h2>Create</h2>
        </div>
        <Form
          className="form"
          model="form.postBlog"
          onSubmit={post => this.onPublish(post)}
        >
          <Control.text model=".title" placeholder="Title" />
          <Control.textarea model=".description" placeholder="description" />
          <Control.text model=".tags" placeholder="Category / Tags" />
          <Control.text model=".author" placeholder="Author" />
          <Control.text model=".image" placeholder="Image URL Only" />
          <Control.text type="submit" value="PUBLISH" />
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    blogDetails: state.formData.postBlog
  }
}

export default connect(mapStateToProps)(Add);
