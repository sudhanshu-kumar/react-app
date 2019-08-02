import { createForms } from "react-redux-form";

export let initialFormState = {
  title: "",
  description: "",
  tags: "",
  author: "",
  image: ""
};

export default createForms({ postBlog: initialFormState });
