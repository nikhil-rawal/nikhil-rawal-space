import React from "react";
import MainSummary from "../components/MainSummary";
import MainProjects from "../components/MainProjects";

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
        <h1 className="sm:text-4xl text-2xl justify-center mx-auto font-semibold">
          My Projects
        </h1>
        <br />
        <MainProjects />
        <br />
        <div className="bg-gradient-to-l from-pink-500 to-violet-500 dark:from-blue-500 dark:to-green-500 h-2 w-9/12 blur-2xl"></div>
      </div>
    </div>
  );
};

export default Main;
