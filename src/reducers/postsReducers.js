import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  blogs: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: action.payload.blogs
      };
    default:
      return state;
  }
};

export default reducer;
