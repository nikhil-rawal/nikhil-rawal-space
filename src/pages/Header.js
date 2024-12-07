import React, { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import logo_dark from "../logos2/logo_dark.svg";
import logo_light from "../logos2/logo_light.svg";

const Header = () => {
  const [theme, setTheme] = useState("light");

  console.log(`logo-${theme}`);

  const toggleTheme = () => {
    // theme === "light" ? setTheme("dark") : setTheme("light");
    theme === "light"
      ? document.body.classList.add("dark")
      : document.body.classList.add("light");
  };

  const changing = () => {
    theme === "light"
      ? document.body.classList.add("dark")
      : document.body.classList.add("light");
  };

  return (
    <div className="flex flex-row justify-between bg-slate-300 w-full border rounded-md p-2">
      <img
        src={theme === "light" ? logo_light : logo_dark}
        alt="logo"
        className="w-12 h-12"
      />
      <div className="flex flex-row">
        <button onClick={toggleTheme}>
          {theme === "light" ? <FaRegMoon /> : <FaRegSun />}
        </button>
        {/* <button onClick={changing}>Check</button> */}
      </div>
    </div>
  );
};

export default Header;
