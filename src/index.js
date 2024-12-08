import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="bg-white dark:bg-black w-full h-full text-black dark:text-white">
    <div className="flex flex-col items-center mx-auto bg-white dark:bg-black sm:w-8/12 w-full h-screen">
      <App />
    </div>
  </div>
);
