import { combineReducers } from "redux";
import postReducer from "./postsReducers";
import forms from "./formReducer";

export default combineReducers({
  postReducer,
  forms
});
