import React from "react";
import SvgIcon from "../newSvg";

const MainSummary = () => {
  return (
    <div className="flex flex-row w-full pt-3 mt-3">
      <div className="flex flex-row w-9/12 justify-start">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          Hello! I'm Nikhil Rawal. A Frontend Developer. <br />I create{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 dark:from-blue-500 dark:to-green-500">
            amazing
          </span>{" "}
          websites using Next.js & React.js
        </h1>
      </div>
      <div className="w-3/12 flex justify-end">
        <SvgIcon height={90} width={90} />
      </div>
    </div>
  );
};

export default MainSummary;
