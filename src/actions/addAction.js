import axios from "axios";
import * as actionTypes from "../actionTypes/actionTypes";

import { apiUrl } from "../helpers/defaultApiUrl";

export const addBlog = blog => {
  return dispatch => {
    dispatch({
      type: actionTypes.ADD_BLOGS,
      payload: { fetching: true, fetched: false }
    });
    axios
      .post(apiUrl, blog)
      .then(res => {
        console.log(res.data);
        axios.get(apiUrl).then(response => {
          dispatch({
            type: actionTypes.ADD_BLOGS_SUCCESS,
            payload: { data: response.data, fetching: false, fetched: true }
          });
        });
      })
      .catch(err => {
        dispatch({ type: actionTypes.ERROR, payload: { err } });
      });
  };
};
