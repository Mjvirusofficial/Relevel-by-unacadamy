import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import allReducer from "./RootReducer";

const store = createStore(allReducer)

ReactDOM.render(
  <>
    <Provider store={store}>
    <App/>
    </Provider>
  </>,document.getElementById('root')
)