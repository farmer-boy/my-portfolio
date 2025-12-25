import React from "react";
import { resumeData } from "../data/resumeData";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full py-24 px-24 bg-white">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-2 gap-8">
        {resumeData.projects.map(project => (
          <div key={project.title} className="border rounded-lg shadow p-4">
            {project.image && <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded mb-4"/>}
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map(tech => (
                <span key={tech} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
