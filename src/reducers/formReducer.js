import { createForms } from "react-redux-form";

const initialFormState = {
  title: "",
  description: "",
  tags: [],
  author: "",
  image: ""
};

export default createForms({ postBlog: initialFormState });
