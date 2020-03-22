import React from "react";
import ReactDOM from "react-dom";
import App from "./layouts/App";
import "normalize.css";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";




ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();

