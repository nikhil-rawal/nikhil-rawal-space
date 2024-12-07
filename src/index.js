import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="flex flex-col items-center mx-auto bg-green-300 sm:w-8/12 w-full h-screen">
    <App />
  </div>
);
