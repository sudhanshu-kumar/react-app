import { combineForms } from "react-redux-form";

const initialFormState = {
  title: "",
  description: "",
  tags: "",
  author: "",
  image: ""
};

const forms = combineForms({
  postBlog: initialFormState
});

export default forms;
