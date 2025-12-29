import React from "react";
import { resumeData } from "../data/resumeData";
import { useTheme } from "../context/ThemeContext";

const Experience: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="experience" className={`w-full py-24 px-24 ${
      isDark
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
        : 'bg-gradient-to-br from-white via-gray-50 to-white'
    }`}>
      <h2 className={`text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Experience</h2>
      <div className="space-y-8">
        {resumeData.experience.map(exp => (
          <div key={exp.role} className={`border-l-4 pl-6 ${
            isDark ? 'border-cyan-400' : 'border-blue-600'
          }`}>
            <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h3>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{exp.company} | {exp.duration}</p>
            <ul className={`list-disc ml-6 mt-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
              {exp.responsibilities.map((task, idx) => <li key={idx}>{task}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
