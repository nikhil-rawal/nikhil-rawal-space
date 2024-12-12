import React from "react";
import ProjectsCard from "./ProjectsCard";

const MainProjects = () => {
  return (
    <div className="flex flex-col py-2 my-2">
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
      <ProjectsCard />
    </div>
  );
};

export default MainProjects;
