import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "normalize.css";
import "./index.css";
import "./fonts/Lato/Lato-Bold.ttf";
import "./fonts/Lato/Lato-Regular.ttf";
import "./fonts/Lato/Lato-Light.ttf";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
