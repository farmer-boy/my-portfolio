import React from "react";
import { resumeData } from "../data/resumeData";
import { useTheme } from "../context/ThemeContext";

const Skills: React.FC = () => {
  const { technicalSkills } = resumeData;
  const { isDark } = useTheme();
  const categories = Object.entries(technicalSkills);

  return (
    <section id="skills" className={`w-full py-24 px-24 ${
      isDark
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
        : 'bg-gradient-to-br from-white via-gray-50 to-white'
    }`}>
      <h2 className={`text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Skills</h2>
      <div className="grid grid-cols-3 gap-8">
        {categories.map(([category, skills]) => (
          <div key={category}>
            <h3 className={`font-semibold text-xl mb-2 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>{category.toUpperCase()}</h3>
            <ul className={`list-disc ml-6 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
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
