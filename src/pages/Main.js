import React from "react";
import SvgIcon from "../newSvg";

const Main = () => {
  return (
    <div className="flex flex-col py-4 w-full ">
      <div className="flex flex-row w-full">
        <div className="flex flex-row w-9/12">
          <h1 className="sm:text-5xl text-4xl ">
            Hello! I'm Nikhil.
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
    </div>
  );
};

export default Main;
