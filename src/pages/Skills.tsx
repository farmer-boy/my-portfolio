import React from "react";
import skillsData from "../data/skills.json";
import SectionTitle from "../components/SectionTitle";

const Skills: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionTitle
          title="Technical Expertise"
          subtitle="Languages, frameworks, and tools I master"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillsData.skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500 border-opacity-30 p-8 rounded-xl hover:border-opacity-100 transition shadow-2xl hover:shadow-purple-500/20 group"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent mb-6 group-hover:from-white group-hover:to-gray-200 transition">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-3 text-gray-300 group-hover:text-purple-300 transition"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-white rounded-full group-hover:scale-150 transition"></span>
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills Overview Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-purple-500 border-opacity-30 p-12 rounded-2xl shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">💡</span> Why These Skills?
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            My skill set is carefully curated through hands-on experience in building
            production-level applications. I specialize in full stack development,
            creating everything from responsive user interfaces to robust backend APIs.
            Each skill represents real-world projects where I've applied and perfected
            these technologies to deliver scalable, maintainable solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg border border-cyan-500 border-opacity-20">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="text-cyan-400 font-bold mb-2">Frontend Excellence</h4>
              <p className="text-gray-400 text-sm">
                Building beautiful, responsive interfaces with modern frameworks
              </p>
            </div>
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg border border-blue-500 border-opacity-20">
              <div className="text-4xl mb-3">⚙️</div>
              <h4 className="text-blue-400 font-bold mb-2">Backend Power</h4>
              <p className="text-gray-400 text-sm">
                Designing scalable APIs and robust server architectures
              </p>
            </div>
            <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg border border-purple-500 border-opacity-20">
              <div className="text-4xl mb-3">📱</div>
              <h4 className="text-purple-400 font-bold mb-2">Mobile Native</h4>
              <p className="text-gray-400 text-sm">
                Creating cross-platform mobile apps with Flutter
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
