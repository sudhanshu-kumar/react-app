import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/index";

const middleware = applyMiddleware(thunkMiddleware);

export default createStore(rootReducer, middleware);
