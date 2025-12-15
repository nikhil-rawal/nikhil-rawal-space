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
    <div className="header flex flex-row rounded-2xl shadow-sm isolate bg-background/10 saturate-100 backdrop-blur-[10px] transition-shadow fixed z-10 w-full md:w-10/12 lg:w-9/12">
      <div className="flex flex-row w-full border-none rounded-md py-3 px-4 content-center items-center">
        <div className="w-9/12 justify-start">
          <SvgIcon height={50} width={50} />
        </div>
        <div className="flex flex-row w-3/12 justify-end">
          <div className=" hover:bg-stone-300 dark:hover:bg-stone-700 cursor-pointer rounded-xl p-2 mx-0 sm:mx-1 md:mx-2 lg:mx-3 flex justify-center content-center items-center">
            <a
              href="https://www.linkedin.com/in/nikhil-rawal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-6 w-6 2xl:w-8 2xl:h-8 md:w-7 md:h-7 lg:h-7 lg:w-7 " />
            </a>
          </div>
          <div className=" hover:bg-stone-300 dark:hover:bg-stone-700 cursor-pointer rounded-xl p-2 mx-0 sm:mx-1 md:mx-2 lg:mx-3 flex justify-center content-center items-center">
            <a
              href="https://github.com/nikhil-rawal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-5 w-5 2xl:w-8 2xl:h-8 md:w-7 md:h-7 lg:h-7 lg:w-7 " />
            </a>
          </div>
          <div className=" hover:bg-stone-300 dark:hover:bg-stone-700 cursor-pointer rounded-xl p-2 mx-0 sm:mx-1 md:mx-2 lg:mx-3 flex justify-center content-center items-center">
            <a
              href="https://nikhil-portfolio-screenshots.s3.us-east-1.amazonaws.com/resume/NikhilRawalResume.pdf"
              download="Nikhil_Rawal_Resume.pdf"
            >
              <IoDocumentText className="h-5 w-5 2xl:w-8 2xl:h-8 md:w-7 md:h-7 lg:h-7 lg:w-7 " />
            </a>
          </div>
          <div className="text-stone-500 cursor-pointer rounded-xl p-2 mx-0 flex justify-center content-center items-center">
            <RxDividerVertical className="h-5 w-5 2xl:w-8 2xl:h-8 md:w-7 md:h-7 lg:h-7 lg:w-7 " />
          </div>
          <div className=" hover:bg-stone-300 dark:hover:bg-stone-700 cursor-pointer rounded-xl p-2 mx-0 sm:mx-1 md:mx-2 lg:mx-3 flex justify-center content-center items-center">
            <button onClick={toggleTheme}>
              {theme === "light" ? (
                <FaRegMoon className="h-5 w-5 2xl:w-8 2xl:h-8 md:w-7 md:h-7 lg:h-7 lg:w-7 " />
              ) : (
                <FaRegSun className="h-5 w-5 2xl:w-8 2xl:h-8 md:w-7 md:h-7 lg:h-7 lg:w-7 " />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
