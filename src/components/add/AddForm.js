import React, { Component } from "react";
import { Form, Control } from "react-redux-form";
import { addBlog } from "../../actions/addAction";
import { connect } from "react-redux";
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

  handleSubmit({ title, description, tags, author, image }) {
    console.log();
        const post = {
      title: title.value,
      description: description.value,
      tags: [tags.value],
      author: author.value,
      image: image.value,
      published: true
    };
    this.props.addBlog(post);
    

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
  }

  render() {
    console.log(this.props)
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

export default connect(null, { addBlog })(Add);
