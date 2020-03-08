import "./index.css";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./app/layout/App";
import { setBaseUrl } from "./config";

setBaseUrl();
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
