import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
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
