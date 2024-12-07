import React from "react";
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex flex-row justify-between">
      <h1>Logo</h1>
      <div className="flex flex-row">
        <FaRegMoon />
        <FaRegSun />
      </div>
    </div>
  );
};

export default Header;
