import React from "react";
import experienceData from "../data/experience.json";
import SectionTitle from "../components/SectionTitle";

const Experience: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionTitle
          title="Professional Experience"
          subtitle="My career journey and achievements"
        />

        <div className="space-y-8">
          {experienceData.experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-gradient-to-r from-gray-800 to-gray-900 border-l-4 border-purple-500 p-8 rounded-xl hover:shadow-2xl hover:shadow-purple-500/20 transition shadow-lg group"
            >
              <div className="flex justify-between items-start mb-4 flex-col sm:flex-row gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-purple-300 transition">
                    {exp.role}
                  </h3>
                  <p className="text-purple-400 font-bold text-lg mt-2">{exp.company}</p>
                </div>
                <span className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              <p className="text-gray-400 mb-6 text-lg">{exp.description}</p>

              <h4 className="font-bold text-purple-300 mb-4 uppercase tracking-wider text-sm">
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index} className="flex gap-3 text-gray-300">
                    <span className="text-purple-400 font-bold text-xl">✓</span>
                    <span className="text-lg">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-12 rounded-2xl border border-purple-500 border-opacity-30 shadow-2xl">
          <h3 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-5xl">🚀</span>
            Looking to Collaborate?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            I'm always open to new opportunities and exciting projects. Let's discuss how I can
            contribute to your next venture and create something amazing together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-gray-700 to-gray-600 text-white px-10 py-4 rounded-lg hover:from-gray-600 hover:to-gray-500 transition font-bold text-lg transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
