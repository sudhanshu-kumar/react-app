import { combineForms } from "react-redux-form";

const initialFormState = {
  title: "",
  description: "",
  tags: [],
  author: "",
  image: ""
};

export default combineForms({ postBlog: initialFormState }, "forms");
