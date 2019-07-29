import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
  blogDetails: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BLOGS_SUCCESS:
    case actionTypes.ADD_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: action.payload.blogs
      };
    case actionTypes.FETCH_BLOG_DETAILS:
      return {
        ...state,
        blogDetails: action.payload.blogDetails
      };
    case actionTypes.ERROR:
      return {
        ...state,
        error: action.payload.err
      };
    default:
      return state;
  }
};

export default reducer;
