import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter as BrowserRouter } from "react-router-dom";
import { Store } from "./Redux/Store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
