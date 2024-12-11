import React, { useState, useEffect } from "react";
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";

import SvgIcon from "../newSvg";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("light", theme === "light");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-row bg-white dark:bg-black w-full border-none rounded-md py-2 px-4 content-center ">
        <div className="w-9/12">
          <SvgIcon height={50} width={50} />
        </div>
        <div className="flex flex-row w-3/12 justify-end">
          <a
            href="https://www.linkedin.com/in/nikhil-rawal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-6 w-6 sm:mx-4 mx-2" />
          </a>
          <a
            href="https://github.com/nikhil-rawal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-6 w-6 sm:mx-4 mx-2" />
          </a>
          <a href="/resume.pdf" download="Nikhil_Resume.pdf">
            <IoDocumentText className="h-6 w-6 sm:mx-4 mx-2" />
          </a>
          <div>
            <RxDividerVertical className="h-6 w-6 sm:mx-4 mx-2 text-stone-500" />
          </div>
          <div className="sm:mx-4 mx-2">
            <button onClick={toggleTheme}>
              {theme === "light" ? (
                <FaRegMoon className="h-6 w-6 " />
              ) : (
                <FaRegSun className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
