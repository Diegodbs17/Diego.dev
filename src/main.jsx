import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router";
import App from './App.jsx'
import "./assets/css/style.css";
import "./assets/css/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);