import React from "react";
import { resumeData } from "../data/resumeData";

const Education: React.FC = () => {
  return (
    <section id="education" className="w-full py-24 px-24 bg-white">
      <h2 className="text-4xl font-bold mb-8">Education</h2>
      <div className="space-y-6">
        {resumeData.education.map(edu => (
          <div key={edu.degree} className="border-l-4 border-yellow-400 pl-6">
            <h3 className="text-2xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.university} | {edu.years}</p>
            {edu.cgpa && <p className="text-gray-700 mt-1">CGPA: {edu.cgpa}</p>}
            {edu.details && <p className="text-gray-700 mt-1">{edu.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
