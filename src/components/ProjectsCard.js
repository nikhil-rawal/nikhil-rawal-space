import React from "react";
import { LuLightbulb } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";
import ProjectsSwiper from "./ProjectsSwiper";

const ProjectsCard = ({
  projectName,
  projectLogo,
  projectImages,
  projectDescription,
  projectTags,
  projectLiveLink,
  projectCodeLink,
  uniqueID,
}) => {
  return (
    <div className="flex flex-col rounded-2xl shadow-lg isolate bg-background/20 backdrop-blur-xl p-6 my-4">
      <div className="flex flex-row justify-start items-center gap-2">
        {/* Project Logo */}
        {(projectLogo && (
          <img
            src={projectLogo}
            alt={`${projectName}'s Logo`}
            className="w-10 h-10"
          />
        )) || <LuLightbulb className="h-6 w-6 text-accent" />}
        <h2 className="text-lg font-semibold">{projectName}</h2>
      </div>

      {/* Project Images */}
      <ProjectsSwiper screenshots={projectImages} uniqueID={uniqueID} />

      {/* Project Description */}
      <p className="text-sm text-gray-700 dark:text-gray-300">
        {projectDescription}
      </p>

      {/* Tags Section */}
      <div className="mt-4 flex flex-wrap gap-2">
        {projectTags.length > 0 &&
          projectTags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs font-medium bg-stone-200 dark:bg-stone-600 cursor-pointer hover:scale-105"
            >
              {tag}
            </span>
          ))}
      </div>

      {/* Call-to-Action Buttons */}
      <div className="mt-4 flex flex-row justify-end ">
        <div className="p-2 hover:bg-stone-200 dark:hover:bg-stone-500 rounded-lg">
          <a href={projectLiveLink || "#"} rel="noopener noreferrer">
            <button className="flex flex-row mx-2">
              <span className="font-medium mx-1">Live</span>
              <LuExternalLink className="h-4 w-4" />
            </button>
          </a>
        </div>
        <div className="p-2 hover:bg-stone-200 dark:hover:bg-stone-500 rounded-lg">
          <a href={projectCodeLink || "#"} rel="noopener noreferrer">
            <button className="flex flex-row mx-2">
              <span className="font-medium mx-1">Code</span>
              <LuExternalLink className="h-4 w-4" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
