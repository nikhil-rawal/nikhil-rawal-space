import React from "react";
import SvgIcon from "../newSvg";

const MainSummary = () => {
  return (
    <div className="flex flex-row w-full pt-3 mt-3">
      <div className="flex flex-row w-9/12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          Hello! I'm Nikhil Rawal.
          <br />A Front End ReactJS developer. I create{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            amazing
          </span>{" "}
          websites using React.
        </h1>
      </div>
      <div className="w-3/12 flex justify-end">
        <SvgIcon height={90} width={90} />
      </div>
    </div>
  );
};

export default MainSummary;

{
  /* <h1 className="flex items-center text-6xl font-medium text-neutral-400">
  Dive Into
  <span className="relative ml-3 h-[1em] w-36 overflow-hidden">
    <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white">
      Ideas
    </span>
    <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:0.83s]">
      Tech
    </span>
    <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:1.83s]">
      Art
    </span>
  </span>
</h1>; */
}
