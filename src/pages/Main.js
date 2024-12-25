import React from "react";
import MainSummary from "../components/MainSummary";
import MainProjects from "../components/MainProjects";
import Footer from "./Footer";
import Skills from "./Skills";
import { FaLink } from "react-icons/fa";
import { PiBracketsCurlyBold } from "react-icons/pi";

const Main = () => {
  return (
    <div
      className="main flex flex-col py-4 pt-20 w-full "
      style={{ marginTop: "80px" }}
    >
      <MainSummary />
      <div className="text-stone-500 py-4 sm:text-lg ">
        Toronto, Canada • UTC/GMT -5
      </div>
      <div className="flex flex-col py-10 h-1 ">
        <h1 className="sm:text-4xl text-2xl justify-center mx-auto font-semibold flex items-center">
          <span className="mx-2 px-2">
            <FaLink />
          </span>
          My Projects
        </h1>
        <br />
        <MainProjects />
        <br />
        {/* Skills */}
        <h1 className="sm:text-4xl text-2xl justify-center mx-auto font-semibold flex pt-2 mt-2 items-center">
          <span className="mx-2 px-2">
            <PiBracketsCurlyBold />
          </span>
          My Stacks
        </h1>
        <br />
        <div className="skills-section py-2 my-2 ">
          <Skills />
        </div>
        <br />
        {/* Footer */}
        <div className="footer-section py-2 my-2 ">
          <Footer />
          <div className="bg-gradient-to-l from-pink-500 to-violet-500 dark:from-blue-500 dark:to-green-500 h-2 w-9/12 blur-2xl"></div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Main;
