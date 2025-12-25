import React from "react";
import projectsData from "../data/projects.json";
import SectionTitle from "../components/SectionTitle";

const Projects: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionTitle
          title="Featured Projects"
          subtitle="Showcasing my latest work and innovations"
        />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projectsData.projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl hover:shadow-purple-500/30 overflow-hidden group border border-purple-500 border-opacity-20 hover:border-opacity-100 transition"
            >
              {/* Project Header */}
              <div className="h-40 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 flex items-center px-8 relative overflow-hidden group-hover:from-gray-600 group-hover:via-gray-500 group-hover:to-gray-600 transition">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 opacity-10 rounded-full"></div>
                </div>
                <h3 className="text-3xl font-bold text-white relative z-10 group-hover:translate-y-0 transition">
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="font-bold text-purple-400 mb-3 text-sm uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition transform hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-bold text-purple-400 mb-3 text-sm uppercase tracking-wider">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 font-bold">✦</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-6 border-t border-cyan-500 border-opacity-20">
                  {project.links.live !== "#" && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition text-center transform hover:scale-105"
                    >
                      🔗 Live Demo
                    </a>
                  )}
                  {project.links.github !== "#" && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold py-2 px-4 rounded-lg hover:from-gray-600 hover:to-gray-800 transition text-center transform hover:scale-105 border border-cyan-500 border-opacity-30"
                    >
                      ⭐ GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="bg-gradient-to-r from-blue-900 to-cyan-900 p-12 rounded-2xl text-center border border-cyan-500 border-opacity-30 shadow-2xl">
          <h3 className="text-4xl font-bold text-white mb-4">🚀 Want to see more?</h3>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Check out my GitHub profile for more projects, contributions, and open-source work.
            I'm always building something new and exciting!
          </p>
          <a
            href="https://github.com/farmer-boy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-10 py-4 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition font-bold text-lg transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30"
          >
            Visit My GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
