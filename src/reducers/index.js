import { combineReducers } from "redux";
import postReducer from "./postsReducers";
import { formData } from "./formReducer";

export default combineReducers({
  postReducer,
  formData
});
