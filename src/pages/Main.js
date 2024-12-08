import React from "react";
import MainSummary from "../components/MainSummary";
import MainProjects from "../components/MainProjects";

const Main = () => {
  return (
    <div className="flex flex-col py-4 w-full ">
      <MainSummary />
      <div className="text-stone-500 py-4 sm:text-lg ">
        Toronto, Canada • UTC/GMT -5
      </div>
      {/* <hr className="py-4 my-4 w-10/12 mx-auto text-stone-500" /> */}
      <div className="flex flex-col py-2 h-1">
        <h1 className="sm:text-4xl text-2xl justify-center mx-auto">
          Nikhil's Projects
        </h1>
        <MainProjects />
      </div>
    </div>
  );
};

export default Main;
