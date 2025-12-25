import React from "react";
import { resumeData } from "../data/resumeData";
import SectionTitle from "../components/SectionTitle";

const About: React.FC = () => {
  const { interests } = resumeData;

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better"
        />

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-300 text-lg leading-relaxed mb-6 bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl border border-purple-500 border-opacity-20">
            {resumeData.summary}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-purple-500 border-opacity-30 hover:border-opacity-100 transition shadow-lg hover:shadow-purple-500/20">
            <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
              <span className="text-3xl">📍</span>
              Location
            </h3>
            <p className="text-gray-300 text-lg font-semibold">{resumeData.location}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-900 to-blue-900 p-8 rounded-xl border border-purple-500 border-opacity-30 hover:border-opacity-100 transition shadow-lg hover:shadow-purple-500/20">
            <h3 className="text-2xl font-bold text-purple-300 mb-6 flex items-center gap-2">
              <span className="text-3xl">📞</span>
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="text-gray-400 text-sm font-semibold mb-1">EMAIL</p>
                <a
                  href={`mailto:${resumeData.contact.email}`}
                  className="text-purple-400 hover:text-purple-300 transition font-semibold break-all"
                >
                  {resumeData.contact.email}
                </a>
              </li>
              <li>
                <p className="text-gray-400 text-sm font-semibold mb-1">PHONE</p>
                <a
                  href={`tel:${resumeData.contact.phone}`}
                  className="text-purple-400 hover:text-purple-300 transition font-semibold"
                >
                  {resumeData.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Interests */}
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-12 rounded-2xl border border-purple-500 border-opacity-30 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">✨</span>
            Interests & Passions
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-slate-900 bg-opacity-50 rounded-lg border border-cyan-500 border-opacity-10 hover:border-opacity-100 transition group"
              >
                <span className="text-3xl group-hover:scale-125 transition">→</span>
                <span className="text-gray-300 text-lg font-semibold group-hover:text-cyan-300 transition">
                  {interest}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
