import React from "react";
import { resumeData } from "../data/resumeData";
import { useTheme } from "../context/ThemeContext";

const Projects: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="projects" className={`w-full py-24 px-24 ${
      isDark
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
        : 'bg-gradient-to-br from-white via-gray-50 to-white'
    }`}>
      <h2 className={`text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Projects</h2>
      <div className="grid grid-cols-2 gap-8">
        {resumeData.projects.map(project => (
          <div key={project.title} className={`border rounded-lg shadow p-4 transition-all ${
            isDark
              ? 'bg-slate-800 border-slate-700 shadow-slate-900'
              : 'bg-white border-gray-200 shadow-gray-300'
          }`}>
            {project.image && <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded mb-4"/>}
            <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
            <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map(tech => (
                <span key={tech} className={`px-2 py-1 rounded text-sm ${
                  isDark
                    ? 'bg-slate-700 text-cyan-300'
                    : 'bg-gray-200 text-gray-800'
                }`}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
