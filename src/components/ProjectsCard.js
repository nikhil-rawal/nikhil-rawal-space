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
    <div className="flex flex-col border rounded-md border-stone-500 p-12">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <LuLightbulb className="h-6 w-6" />
          <h2 className="mx-2">Project's Name</h2>
        </div>
        <LuExternalLink className="h-6 w-6" />
      </div>
      <div className="py-2 my-2">
        <img
          src="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg"
          alt="sample-photo"
          className="w-96"
        />
      </div>
      <p>
        India has given to the world many a great cricketer but perhaps none as
        ambitious as Virat Kohli. To meet his ambition, Kohli employed the
        technical assiduousness of Sachin Tendulkar and fitness that was in the
        league of top athletes in the world, not just cricketers. As a result,
        Kohli became the most consistent all-format accumulator of his time,
        making jaw-dropping chases look easy, and finding, in his own words, the
        safest possible way to score runs. Plenty of them.
      </p>
    </div>
  );
};

export default ProjectsCard;
