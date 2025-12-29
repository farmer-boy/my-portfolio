import React from "react";
import { resumeData } from "../data/resumeData";
import { useTheme } from "../context/ThemeContext";

const About: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className={`w-full py-24 px-24 ${
      isDark
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
        : 'bg-gradient-to-br from-white via-gray-50 to-white'
    }`}>
      <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
      <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>{resumeData.summary}</p>
      <div className="mt-6 grid grid-cols-2 gap-8">
        <div>
          <h3 className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>Location</h3>
          <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{resumeData.location}</p>
        </div>
        <div>
          <h3 className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>Contact</h3>
          <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Email: {resumeData.contact.email}</p>
          <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Phone: {resumeData.contact.phone}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
