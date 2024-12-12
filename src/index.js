import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="flex flex-col w-full h-full text-black dark:text-white bg-white dark:bg-black ">
    <div className="flex flex-col items-center mx-auto w-full md:w-10/12 lg:w-8/12 ">
      <App />
    </div>
  </div>
);
