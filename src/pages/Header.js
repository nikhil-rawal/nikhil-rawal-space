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
    <div className="flex flex-row w-full rounded-2xl shadow-sm isolate bg-background/10 saturate-100 backdrop-blur-[10px] transition-shadow">
      <div className="flex flex-row bg-white dark:bg-black w-full border-none rounded-md py-3 px-4 content-center items-center">
        <div className="w-9/12 ">
          <SvgIcon height={55} width={55} />
        </div>
        <div className="flex flex-row w-3/12 justify-end">
          <div className=" hover:bg-stone-200 dark:hover:bg-stone-800 cursor-pointer rounded-xl mx-2 md:mx-3 lg:mx-4 xl:mx-5 p-2 flex justify-center content-center items-center">
            <a
              href="https://www.linkedin.com/in/nikhil-rawal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-6 w-6 2xl:w-8 2xl:h-8 md:w-7 md:h-7 lg:h-7 lg:w-7 " />
            </a>
          </div>
          <div className=" hover:bg-stone-200 dark:hover:bg-stone-800 cursor-pointer rounded-xl mx-2 md:mx-3 lg:mx-4 xl:mx-5 p-2 flex justify-center content-center items-center">
            <a
              href="https://github.com/nikhil-rawal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-6 w-6 2xl:w-8 2xl:h-8 md:w-7 md:h-7 lg:h-7 lg:w-7 " />
            </a>
          </div>
          <div className=" hover:bg-stone-200 dark:hover:bg-stone-800 cursor-pointer rounded-xl mx-2 md:mx-3 lg:mx-4 xl:mx-5 p-2 flex justify-center content-center items-center">
            <a href="/resume.pdf" download="Nikhil_Resume.pdf">
              <IoDocumentText className="h-6 w-6 2xl:w-8 2xl:h-8 md:w-7 md:h-7 lg:h-7 lg:w-7 " />
            </a>
          </div>
          <div className="text-stone-500 cursor-pointer rounded-xl mx-2 md:mx-3 lg:mx-4 xl:mx-5 p-2 flex justify-center content-center items-center">
            <RxDividerVertical className="h-6 w-6 2xl:w-8 2xl:h-8 md:w-7 md:h-7 lg:h-7 lg:w-7 " />
          </div>
          <div className=" hover:bg-stone-200 dark:hover:bg-stone-800 cursor-pointer rounded-xl mx-2 md:mx-3 lg:mx-4 xl:mx-5 p-2 flex justify-center content-center items-center">
            <button onClick={toggleTheme}>
              {theme === "light" ? (
                <FaRegMoon className="h-6 w-6 2xl:w-8 2xl:h-8 md:w-7 md:h-7 lg:h-7 lg:w-7 " />
              ) : (
                <FaRegSun className="h-6 w-6 2xl:w-8 2xl:h-8 md:w-7 md:h-7 lg:h-7 lg:w-7 " />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
