import axios from "axios";
import * as actionTypes from "../actionTypes/actionTypes";

export const fetchBlogs = () => {
  return dispatch => {
    axios
      .get("http://test.peppersquare.com/api/v1/article")
      .then(res => {
        dispatch({
          type: actionTypes.FETCH_BLOGS_SUCCESS,
          payload: { blogs: res.data }
        });
      })
      .catch(err => {
        dispatch({ type: actionTypes.ERROR, payload: { err } });
      });
  };
};
