import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";
import "@material-ui/core";
import "@material-ui/icons";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
