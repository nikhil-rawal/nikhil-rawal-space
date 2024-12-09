import React from "react";
import SvgIcon from "../newSvg";

const MainSummary = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-row w-9/12">
        <h1 className="sm:text-5xl text-3xl ">
          Hello! I'm Nikhil Rawal.
          <br />A Front End ReactJS developer. I create{" "}
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            amazing
          </span>{" "}
          websites using React.
        </h1>
      </div>
      <div className="w-3/12 flex justify-end">
        <SvgIcon height={100} width={100} />
      </div>
    </div>
  );
};

export default MainSummary;
