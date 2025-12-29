import React from "react";
import { resumeData } from "../data/resumeData";
import { useTheme } from "../context/ThemeContext";
import { downloadResume } from "../services/resumeService";

const Hero: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="hero" className={`w-full h-screen flex items-center justify-between px-24 ${
      isDark
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
        : 'bg-gradient-to-br from-white via-gray-50 to-white'
    }`}>
      <div className="max-w-lg">
        <h1 className={`text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {resumeData.name}
        </h1>
        <h2 className={`text-2xl mt-2 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
          {resumeData.title}
        </h2>
        <p className={`mt-4 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
          {resumeData.summary}
        </p>
        <div className="mt-6 flex gap-4">
          <button 
            onClick={downloadResume}
            className={`px-6 py-2 rounded font-semibold transition-all ${
              isDark
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/50'
                : 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-300/50'
            }`}
          >
            📥 Download Resume
          </button>
          <a 
            href="#contact" 
            className={`px-6 py-2 rounded font-semibold transition-all ${
              isDark
                ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-600'
                : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
            }`}
          >
            Contact Me
          </a>
        </div>
      </div>
      <div>
        <img src="/assets/profile.png" alt="Profile" className={`w-72 h-72 rounded-full object-cover shadow-2xl ${
          isDark ? 'shadow-blue-500/30' : 'shadow-blue-300/50'
        }`}/>
      </div>
    </section>
  );
};

export default Hero;
