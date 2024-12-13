import React from "react";
import { LuLightbulb } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";
import ProjectsSwiper from "./ProjectsSwiper";
import { myProjects } from "../utils/myProjects";

const ProjectsCard = ({
  projectName,
  projectLogo,
  projectImages,
  projectDescription,
  projectTags,
  projectLiveLink,
  projectCodeLink,
}) => {
  console.log(myProjects);
  return (
    <div className="flex flex-col rounded-2xl shadow-lg isolate bg-background/20 backdrop-blur-xl p-6">
      <div className="flex flex-row justify-start items-center gap-2">
        {/* Project Logo */}
        {projectLogo || <LuLightbulb className="h-6 w-6 text-accent" />}
        <h2 className="text-lg font-semibold">
          {/* Project Name */}
          {projectName || "Sample Project"}
        </h2>
      </div>

      {/* Project Images */}
      <ProjectsSwiper
        screenshots={
          projectImages || [
            "https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg",
            "https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg",
            "https://via.placeholder.com/300x200?text=Screenshot+2",
          ]
        }
      />

      {/* Project Description */}
      <p className="text-sm text-gray-700 dark:text-gray-300">
        {projectDescription ||
          "This is a sample project description. This is a sample project description. This is a sample project description. This is a sample project description. This is a sample project description."}
      </p>

      {/* Tags Section */}
      <div className="mt-4 flex flex-wrap gap-2">
        {projectTags ||
          [
            "React.js",
            "Tailwind CSS",
            "Web Development",
            "Frontend Development",
          ].map((tag, index) => (
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
        <a href="#" rel="noopener noreferrer">
          <button
            className="flex flex-row mx-2"
            onClick={() => alert("View Project")}
          >
            <span className="font-medium mx-1">Live</span>{" "}
            <LuExternalLink className="h-4 w-4" />
          </button>
        </a>

        <a href="#" rel="noopener noreferrer">
          <button
            className="flex flex-row mx-2"
            onClick={() => alert("View Code")}
          >
            <span className="font-medium mx-1">Code</span>{" "}
            <LuExternalLink className="h-4 w-4" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;

{
  /* <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="h-8 w-8 flex justify-center items-center rounded-full text-secondary hover:text-accent bg-background hover:bg-accent/20 transition-colors cursor-pointer"
        >
          <LuExternalLink className="h-5 w-5" />
        </a> */
}

{
  /* {myProjects.map((project, index) => (
        <div key={index}>
          <h1>{project.name}</h1>
          <br />
          <p>{project.description}</p>
        </div>
      ))} */
}

{
  /* <div className="relative my-4 group">
        <img
          src={
            "https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg"
          }
          alt="Project Screenshot"
          className="w-full object-cover rounded-lg shadow-md "
        />
      </div> */
}
