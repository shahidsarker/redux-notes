import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import noteReducer from "./reducers/noteReducer";
import filterReducer from "./reducers/filterReducer";

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
});

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
