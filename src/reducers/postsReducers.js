import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  blogs: {
    fetching: false,
    fetched: false,
    data: []
  },
  blogDetails: {
    fetching: false,
    fetched: false,
    data: []
  },
  error: null,
  pageNotFound: false
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BLOGS:
      return {
        ...state,
        blogs: action.payload
      }
    case actionTypes.FETCH_BLOGS_SUCCESS:
    case actionTypes.ADD_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: action.payload
      };
    case actionTypes.FETCH_BLOG_DETAILS:
    case actionTypes.FETCH_BLOG_DETAILS_SUCCESS:
      return {
        ...state,
        blogDetails: action.payload
      };
    case actionTypes.ERROR_PAGE:
      return {
        ...state,
        pageNotFound: action.payload.pageNotFound
      }
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
