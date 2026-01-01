import React from "react";
import SectionTitle from "../components/SectionTitle";
import { useTheme } from "../context/ThemeContext";
import { downloadResume, downloadCoverLetter } from "../services/resumeService";

const CV: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section className={`w-full py-20 px-4 relative overflow-hidden min-h-screen ${
      isDark
        ? 'bg-gradient-to-br from-black via-gray-900 to-black'
        : 'bg-gradient-to-br from-white via-gray-100 to-white'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl ${
          isDark ? 'opacity-10 bg-cyan-500' : 'opacity-5 bg-blue-300'
        }`}></div>
        <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl ${
          isDark ? 'opacity-5 bg-teal-500' : 'opacity-3 bg-teal-300'
        }`}></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionTitle
          title="Curriculum Vitae"
          subtitle="Download my resume and cover letter"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Download Resume Card */}
          <div className={`rounded-2xl shadow-2xl overflow-hidden border-2 transition-all hover:scale-105 ${
            isDark
              ? 'bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 border-cyan-400 border-opacity-30 hover:border-opacity-100 hover:shadow-cyan-400/50'
              : 'bg-gradient-to-br from-white via-blue-50 to-white border-blue-500 border-opacity-40 hover:border-opacity-100 hover:shadow-blue-500/40'
          }`}>
            <div className={`h-32 flex items-center justify-center relative overflow-hidden ${
              isDark
                ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500'
                : 'bg-gradient-to-r from-blue-600 via-blue-500 to-teal-600'
            }`}>
              <div className="text-6xl">📄</div>
            </div>
            <div className="p-8">
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Resume
              </h3>
              <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Download my professional resume in PDF format. Contains detailed information about my experience, skills, education, and achievements.
              </p>
              <button
                onClick={downloadResume}
                className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  isDark
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-cyan-400/60 border-2 border-cyan-400/30'
                    : 'bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:shadow-lg hover:shadow-blue-500/50 border-2 border-blue-500/30'
                }`}
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* Download Cover Letter Card */}
          <div className={`rounded-2xl shadow-2xl overflow-hidden border-2 transition-all hover:scale-105 ${
            isDark
              ? 'bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 border-pink-400 border-opacity-30 hover:border-opacity-100 hover:shadow-pink-400/50'
              : 'bg-gradient-to-br from-white via-pink-50 to-white border-pink-500 border-opacity-40 hover:border-opacity-100 hover:shadow-pink-500/40'
          }`}>
            <div className={`h-32 flex items-center justify-center relative overflow-hidden ${
              isDark
                ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500'
                : 'bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600'
            }`}>
              <div className="text-6xl">✉️</div>
            </div>
            <div className="p-8">
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Cover Letter
              </h3>
              <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Download my cover letter in PDF format. A personalized introduction that highlights my passion, motivation, and fit for potential opportunities.
              </p>
              <button
                onClick={downloadCoverLetter}
                className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  isDark
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-lg hover:shadow-pink-400/60 border-2 border-pink-400/30'
                    : 'bg-gradient-to-r from-purple-600 to-rose-600 text-white hover:shadow-lg hover:shadow-pink-500/50 border-2 border-pink-500/30'
                }`}
              >
                Download Cover Letter
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className={`mt-12 p-8 rounded-2xl border-2 ${
          isDark
            ? 'bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 border-teal-400 border-opacity-30'
            : 'bg-gradient-to-br from-white via-teal-50 to-white border-teal-500 border-opacity-40'
        }`}>
          <h4 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            📋 Document Information
          </h4>
          <ul className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <li className="flex items-start gap-2">
              <span className={`font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>•</span>
              <span>Both documents are available in PDF format</span>
            </li>
            <li className="flex items-start gap-2">
              <span className={`font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>•</span>
              <span>Updated regularly with latest information</span>
            </li>
            <li className="flex items-start gap-2">
              <span className={`font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>•</span>
              <span>Professional formatting and layout</span>
            </li>
            <li className="flex items-start gap-2">
              <span className={`font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>•</span>
              <span>Ready for printing or digital submission</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CV;

