import axios from "axios";
import { apiUrl } from "../helpers/defaultApiUrl";
import * as actionTypes from "../actionTypes/actionTypes";

export const fetchBlogs = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.FETCH_BLOGS,
      payload: { fetching: true, fetched: false }
    });
    axios
      .get(apiUrl)
      .then(res => {
        dispatch({
          type: actionTypes.FETCH_BLOGS_SUCCESS,
          payload: { data: res.data, fetching: false, fetched: true }
        });
      })
      .catch(err => {
        dispatch({ type: actionTypes.ERROR, payload: { err } });
      });
  };
};

export const fetchBlogDetails = id => {
  return dispatch => {
    dispatch({
      type: actionTypes.FETCH_BLOG_DETAILS,
      payload: { fetching: true, fetched: false }
    });
    axios
      .get(apiUrl)
      .then(res => {
        const post = res.data.filter(p => p.id === parseInt(id, 10));
        console.log(post);
        if(post.length > 0)
        dispatch({
          type: actionTypes.FETCH_BLOG_DETAILS_SUCCESS,
          payload: { data: post[0], fetching: false, fetched: true }
        });
      })
      .catch(err => {
        dispatch({ type: actionTypes.ERROR, payload: { err } });
      });
  };
};
