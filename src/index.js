import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, middleware);

const RootElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(RootElement, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
