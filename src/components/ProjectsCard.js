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
    <div className="flex flex-col rounded-2xl shadow-lg bg-white dark:bg-neutral-900 p-6 py-8 h-full hover:scale-105 transition-all duration-300">
      {/* Wrapper for the content */}
      <div className="flex flex-col flex-grow">
        {/* Header with Project Name and Logo */}
        <div className="flex flex-row items-center gap-2">
          {projectLogo ? (
            <img
              src={projectLogo}
              alt={`${projectName}'s Logo`}
              className="w-24 "
            />
          ) : (
            <LuLightbulb className="h-6 w-6 text-accent" />
          )}
          <h2 className="text-lg font-semibold">{projectName}</h2>
        </div>

        {/* Project Images */}
        <ProjectsSwiper screenshots={projectImages} uniqueID={uniqueID} />

        {/* Project Description */}
        <p className="text-md mt-4 text-gray-700 dark:text-gray-300">
          {projectDescription}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {projectTags?.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-sm font-medium bg-stone-200 dark:bg-stone-600 cursor-pointer hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Links - Positioned to bottom-right */}
      <div className="mt-4 flex gap-4 justify-end self-end">
        {projectLiveLink && (
          <a
            href={projectLiveLink}
            rel="noopener noreferrer"
            target="_blank"
            className="p-2 hover:bg-stone-200 dark:hover:bg-stone-500 rounded-lg"
          >
            <button className="flex flex-row mx-2">
              <span className="font-medium mx-1">Live</span>
              <LuExternalLink className="h-4 w-4" />
            </button>
          </a>
        )}
        {projectCodeLink && (
          <a
            href={projectCodeLink}
            rel="noopener noreferrer"
            target="_blank"
            className="p-2 hover:bg-stone-200 dark:hover:bg-stone-500 rounded-lg"
          >
            <button className="flex flex-row mx-2">
              <span className="font-medium mx-1">Code</span>
              <LuExternalLink className="h-4 w-4" />
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
