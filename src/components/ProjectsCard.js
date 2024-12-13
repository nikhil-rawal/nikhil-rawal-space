import React from "react";
import { LuLightbulb } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";
import ProjectsSwiper from "./ProjectsSwiper";

const ProjectsCard = ({
  projectIcon,
  projectName,
  projectDescription,
  projectTags,
}) => {
  return (
    <div className="flex flex-col rounded-2xl shadow-lg isolate bg-background/20 backdrop-blur-xl p-6">
      {/* Project Header */}
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-2">
          <LuLightbulb className="h-6 w-6 text-accent animate-bounce" />
          <h2 className="text-lg font-semibold text-primary">
            {"Project's Name"}
          </h2>
        </div>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="h-8 w-8 flex justify-center items-center rounded-full text-secondary hover:text-accent bg-background hover:bg-accent/20 transition-colors cursor-pointer"
        >
          <LuExternalLink className="h-5 w-5" />
        </a>
      </div>

      {/* Project Image */}
      <ProjectsSwiper
        screenshots={[
          "https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg",
          "https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg",
          "https://via.placeholder.com/300x200?text=Screenshot+2",
        ]}
      />
      {/* <div className="relative my-4 group">
        <img
          src={
            "https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg"
          }
          alt="Project Screenshot"
          className="w-full object-cover rounded-lg shadow-md "
        />
      </div> */}

      {/* Project Description */}
      <p className="text-sm text-gray-700 dark:text-gray-300">
        {
          "An example project description to showcase your work. Briefly explain the purpose, features, or technologies used."
        }
      </p>

      {/* Tags Section */}
      <div className="mt-4 flex flex-wrap gap-2">
        {projectTags?.length > 0
          ? projectTags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs font-medium bg-stone-200 dark:bg-stone-600 cursor-pointer"
              >
                {tag}
              </span>
            ))
          : [
              "React.js",
              "Tailwind CSS",
              "Web Development",
              "Frontend Development",
            ].map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs font-medium bg-stone-200 dark:bg-stone-600 cursor-pointer"
              >
                {tag}
              </span>
            ))}
      </div>

      {/* Call-to-Action Buttons */}
      <div className="mt-4 flex justify-between">
        <button
          className="px-4 py-2 rounded-md bg-accent text-white text-sm font-medium hover:bg-primary-dark transition"
          onClick={() => alert("View Live Project")}
        >
          View Live
        </button>
        <button
          className="px-4 py-2 rounded-md bg-secondary text-white text-sm font-medium hover:bg-accent transition"
          onClick={() => alert("View Code")}
        >
          View Code
        </button>
      </div>
    </div>
  );
};

export default ProjectsCard;

// import React from "react";
// import { LuLightbulb } from "react-icons/lu";
// import { LuExternalLink } from "react-icons/lu";

// const ProjectsCard = ({
//   projectIcon,
//   projectName,
//   projectDescription,
//   projectTags,
// }) => {
//   return (
//     <div className="flex flex-col border rounded-md border-stone-500 p-12">
//       <div className="flex flex-row justify-between">
//         <div className="flex flex-row">
//           <LuLightbulb className="h-6 w-6" />
//           <h2 className="mx-2">Project's Name</h2>
//         </div>
//         <LuExternalLink className="h-6 w-6" />
//       </div>
//       <div className="py-2 my-2">
//         <img
//           src="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg"
//           alt="sample-photo"
//           className="w-96"
//         />
//       </div>
//       <p>
//         India has given to the world many a great cricketer but perhaps none as
//         ambitious as Virat Kohli. To meet his ambition, Kohli employed the
//         technical assiduousness of Sachin Tendulkar and fitness that was in the
//         league of top athletes in the world, not just cricketers.
//       </p>
//       <div className="py-2 flex flex-row flex-wrap content-center">
//         <p className="bg-gray-100 hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 mx-2 rounded-lg m-1 p-1">
//           First Tag
//         </p>
//         <p className="bg-gray-100 hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 mx-2 rounded-lg m-1 p-1">
//           Second Tag
//         </p>
//         <p className="bg-gray-100 hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 mx-2 rounded-lg m-1 p-1">
//           Third Tag
//         </p>
//         <p className="bg-gray-100 hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 mx-2 rounded-lg m-1 p-1">
//           Fourth Tag
//         </p>
//         <p className="bg-gray-100 hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 mx-2 rounded-lg m-1 p-1">
//           Fifth Tag
//         </p>
//         <p className="bg-gray-100 hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 mx-2 rounded-lg m-1 p-1">
//           Sixth Tag
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProjectsCard;
