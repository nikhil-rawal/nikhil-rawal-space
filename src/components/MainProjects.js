import React from "react";
import ProjectsCard from "./ProjectsCard";
import { myProjects } from "../utils/myProjects";

const MainProjects = () => {
  return (
    <div className="py-2 my-2 w-full flex justify-center">
      <div className="grid gap-6 w-full  grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
        {myProjects?.length > 0 &&
          myProjects.map((project, index) => (
            <ProjectsCard
              key={index}
              projectName={project.name}
              projectLogo={project.logo}
              projectImages={project.images}
              projectDescription={project.description}
              projectTags={project.tags}
              projectLiveLink={project.liveLink}
              projectCodeLink={project.codeLink}
              uniqueID={index} // Pass a unique ID
            />
          ))}
      </div>
    </div>
  );
};

export default MainProjects;
