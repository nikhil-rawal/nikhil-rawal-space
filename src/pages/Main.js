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
        <Footer />
      </div>
    </div>
  );
};

export default Main;
