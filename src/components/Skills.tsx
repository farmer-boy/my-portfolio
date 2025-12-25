import React from "react";
import { resumeData } from "../data/resumeData";

const Skills: React.FC = () => {
  const { technicalSkills } = resumeData;
  const categories = Object.entries(technicalSkills);

  return (
    <section id="skills" className="w-full py-24 px-24 bg-gray-50">
      <h2 className="text-4xl font-bold mb-8">Technical Skills</h2>
      <div className="grid grid-cols-3 gap-8">
        {categories.map(([category, skills]) => (
          <div key={category}>
            <h3 className="font-semibold text-xl mb-2">{category.toUpperCase()}</h3>
            <ul className="list-disc ml-6 text-gray-700">
              {(skills as string[]).map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
