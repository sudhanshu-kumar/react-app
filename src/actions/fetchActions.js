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

export const fetchBlogDetails = id => {
  return dispatch => {
    axios
      .get("http://test.peppersquare.com/api/v1/article")
      .then(res => {
        console.log(res.data);
        const post = res.data.filter(p => p.id === parseInt(id, 10));
        console.log(post);
        dispatch({
          type: actionTypes.FETCH_BLOG_DETAILS,
          payload: { blogDetails: post[0] }
        });
      })
      .catch(err => {
        dispatch({ type: actionTypes.ERROR, payload: { err } });
      });
  };
};
