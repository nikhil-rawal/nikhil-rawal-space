import React from "react";
import { LuLightbulb } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";

const ProjectsCard = ({
  projectIcon,
  projectName,
  projectDescription,
  projectTags,
}) => {
  return (
    <div className="flex flex-col border rounded-md border-primary p-6 bg-gray-100 dark:bg-neutral-900 text-primary dark:text-white">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <LuLightbulb className="h-6 w-6 text-accent" />
          <h2 className="mx-2 text-lg font-semibold">
            {projectName || "Project's Name"}
          </h2>
        </div>
        <LuExternalLink className="h-6 w-6 text-secondary hover:text-accent cursor-pointer" />
      </div>
      <div className="py-2 my-2">
        <img
          src="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg"
          alt="sample-photo"
          className="w-full rounded-md shadow-md"
        />
      </div>
      <p className="my-4 text-sm">
        {projectDescription ||
          "India has given to the world many a great cricketer but perhaps none as ambitious as Virat Kohli. To meet his ambition, Kohli employed the technical assiduousness of Sachin Tendulkar and fitness that was in the league of top athletes in the world, not just cricketers."}
      </p>
      <div className="py-2 flex flex-row flex-wrap">
        {projectTags?.length > 0
          ? projectTags.map((tag, index) => (
              <p
                key={index}
                className="bg-primary hover:bg-accent text-white dark:bg-secondary dark:hover:bg-accent mx-2 rounded-lg m-1 px-3 py-1 text-xs cursor-pointer"
              >
                {tag}
              </p>
            ))
          : ["First Tag", "Second Tag", "Third Tag"].map((tag, index) => (
              <p
                key={index}
                className="bg-primary hover:bg-accent text-white dark:bg-secondary dark:hover:bg-accent mx-2 rounded-lg m-1 px-3 py-1 text-xs cursor-pointer"
              >
                {tag}
              </p>
            ))}
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
