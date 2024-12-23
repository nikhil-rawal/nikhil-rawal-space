import React from "react";
import MainSummary from "../components/MainSummary";
import MainProjects from "../components/MainProjects";
import Footer from "./Footer";

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
        {/* Only Footer */}
        <div className="flex flex-col items-center mx-auto py-8 footer rounded-2xl shadow-2xl isolate bg-background/10 saturate-100 backdrop-blur-[10px] transition-shadow z-10 w-full md:w-10/12 lg:w-9/12">
          <Footer />
          <div className="bg-gradient-to-l from-pink-500 to-violet-500 dark:from-blue-500 dark:to-green-500 h-2 w-9/12 blur-2xl"></div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Main;
