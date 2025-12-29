import React from "react";
import educationData from "../data/education.json";
import SectionTitle from "../components/SectionTitle";
import { useTheme } from "../context/ThemeContext";

const Education: React.FC = () => {
  const { isDark } = useTheme();
  
  return (
    <section className={`w-full py-20 px-4 relative overflow-hidden ${
      isDark
        ? 'bg-gradient-to-br from-black via-gray-900 to-black'
        : 'bg-gradient-to-br from-white via-gray-100 to-white'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute bottom-1/3 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-10 ${
          isDark ? 'bg-purple-500' : 'bg-purple-300'
        }`}></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionTitle
          title="Education"
          subtitle="My academic achievements"
        />

        <div className="space-y-8 mb-16">
          {educationData.educations.map((edu) => (
            <div
              key={edu.id}
              className={`rounded-xl shadow-2xl transition p-10 border group ${
                isDark
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-purple-500 border-opacity-30 hover:border-opacity-100 hover:shadow-purple-500/30'
                  : 'bg-gradient-to-br from-gray-100 to-white border-purple-300 border-opacity-30 hover:border-opacity-100 hover:shadow-purple-300/30'
              }`}
            >
              <div className="flex justify-between items-start mb-6 flex-col sm:flex-row gap-4">
                <div>
                  <h3 className={`text-3xl font-bold transition ${
                    isDark ? 'text-white group-hover:text-purple-300' : 'text-gray-900 group-hover:text-purple-600'
                  }`}>
                    {edu.degree}
                  </h3>
                  <p className={`font-bold text-lg mt-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                    {edu.university}
                  </p>
                </div>
                <div className="text-right">
                  <p className={`font-semibold text-sm uppercase tracking-wider mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Graduation
                  </p>
                  <p className={`font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>{edu.years}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-purple-500 border-opacity-20">
                <div className="flex-1">
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                    Academic Performance
                  </p>
                  <p className="text-green-400 font-bold text-2xl">{edu.cgpa}</p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Learning */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-12 rounded-2xl border border-purple-500 border-opacity-30 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">📚</span>
            Continuous Learning
          </h3>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-3xl">
            Beyond formal education, I'm deeply committed to continuous professional development.
            I actively engage with online courses, technical blogs, open-source projects, and
            industry best practices to stay at the forefront of technology and innovation.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "💻", title: "LeetCode & Problem Solving", desc: "Daily coding challenges" },
              { icon: "🤝", title: "Open Source Contributions", desc: "Community-driven projects" },
              { icon: "📖", title: "Technical Documentation", desc: "Learning from the best" },
              { icon: "🏆", title: "Industry Certifications", desc: "Professional credentials" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-purple-500 border-opacity-20 hover:border-opacity-100 transition group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl group-hover:scale-125 transition">{item.icon}</span>
                  <h4 className="font-bold text-purple-300">{item.title}</h4>
                </div>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
