import { combineForms } from "react-redux-form";

export const formData = combineForms(
  {
    postBlogs: {
      title: "",
      description: "",
      tags: "",
      author: "",
      image: ""
    }
  },
  "form"
);
