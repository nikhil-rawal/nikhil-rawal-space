import React from "react";
import ProjectsCard from "./ProjectsCard";
import { myProjects } from "../utils/myProjects";

const MainProjects = () => {
  return (
    <div className="flex flex-col items-center py-2 my-2 w-full">
      <div className="flex flex-col py-1 my-1 w-full md:w-8/12 lg:w-6/12">
        {myProjects?.length > 0 &&
          myProjects.map((project, index) => (
            <div key={index} className="p-2 m-2">
              <ProjectsCard
                projectName={project.name}
                projectLogo={project.logo}
                projectImages={project.images}
                projectDescription={project.description}
                projectTags={project.tags}
                projectLiveLink={project.liveLink}
                projectCodeLink={project.codeLink}
                uniqueID={index} // Pass a unique ID
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainProjects;

//       <div className="flex flex-col py-2 my-2 w-full md:w-8/12 lg:w-6/12">

//  <div className="flex flex-col items-center py-2 my-2 w-full">
//    <div className="grid gap-4 w-full sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
//      {myProjects?.length > 0 &&
//        myProjects.map((project, index) => (
//          <div key={index} className="p-2">
//            <ProjectsCard
//              projectName={project.name}
//              projectLogo={project.logo}
//              projectImages={project.images}
//              projectDescription={project.description}
//              projectTags={project.tags}
//              projectLiveLink={project.liveLink}
//              projectCodeLink={project.codeLink}
//              uniqueID={index} // Pass a unique ID
//            />
//          </div>
//        ))}
//    </div>
//  </div>;
