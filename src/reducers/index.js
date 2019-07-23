import { combineReducers } from "redux";
import postReducer from "./postsReducers";
import forms from "./formReducer";

import { combineForms } from "react-redux-form";

const initialFormState = {
  title: "",
  description: "",
  tags: "",
  author: "",
  image: ""
};

export default combineReducers({
  postReducer,
  forms: combineForms(
    {
      postBlog: initialFormState
    },
    "forms"
  )
});
