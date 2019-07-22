import { combineForms } from "react-redux-form";

export const formData = combineForms(
  {
    postBlog: {
      title: "",
      description: "",
      tags: "",
      author: "",
      image: ""
    }
  },
  "form"
);
