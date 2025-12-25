import React from "react";
import { resumeData } from "../data/resumeData";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full py-24 px-24 bg-gray-50">
      <h2 className="text-4xl font-bold mb-8">Experience</h2>
      <div className="space-y-8">
        {resumeData.experience.map(exp => (
          <div key={exp.role} className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-2xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600">{exp.company} | {exp.duration}</p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              {exp.responsibilities.map((task, idx) => <li key={idx}>{task}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
