import axios from "axios";
import * as actionTypes from "../actionTypes/actionTypes";

export const addBlog = blog => {
  return dispatch => {
    axios
      .post("http://test.peppersquare.com/api/v1/article", blog)
      .then(res => {
        console.log(res.data);
        axios
          .get("http://test.peppersquare.com/api/v1/article")
          .then(response => {
            dispatch({
              type: actionTypes.ADD_BLOGS_SUCCESS,
              payload: { blogs: response.data }
            });
          });
      })
      .catch(err => {
        dispatch({ type: actionTypes.ERROR, payload: { err } });
      });
  };
};
