import React from "react";
import { resumeData } from "../data/resumeData";
import { useTheme } from "../context/ThemeContext";

const Education: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="education" className={`w-full py-24 px-24 ${
      isDark
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
        : 'bg-gradient-to-br from-white via-gray-50 to-white'
    }`}>
      <h2 className={`text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Education</h2>
      <div className="space-y-6">
        {resumeData.education.map(edu => (
          <div key={edu.degree} className={`border-l-4 pl-6 ${
            isDark ? 'border-yellow-400' : 'border-yellow-500'
          }`}>
            <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{edu.degree}</h3>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{edu.university} | {edu.years}</p>
            {edu.cgpa && <p className={`mt-1 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>CGPA: {edu.cgpa}</p>}
            {edu.details && <p className={`mt-1 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>{edu.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
