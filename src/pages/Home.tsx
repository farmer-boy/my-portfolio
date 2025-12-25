import React from "react";
import { resumeData } from "../data/resumeData";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-400 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-white order-2 md:order-1 animate-fadeInLeft">
          <div className="mb-6 animate-slideDown">
            <span className="inline-block px-4 py-2 bg-white bg-opacity-10 text-gray-300 rounded-full text-sm font-semibold border border-white border-opacity-20">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-gray-100 via-white to-gray-100 bg-clip-text text-transparent leading-tight animate-slideDown" style={{ animationDelay: "0.1s" }}>
            {resumeData.name}
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 font-bold mb-8 flex items-center gap-2 animate-slideDown" style={{ animationDelay: "0.2s" }}>
            <span className="w-2 h-2 bg-white rounded-full animate-glow"></span>
            {resumeData.title}
          </h2>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg animate-slideDown" style={{ animationDelay: "0.3s" }}>
            {resumeData.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap mb-10 animate-slideDown" style={{ animationDelay: "0.4s" }}>
            <a
              href="/resume.pdf"
              download
              className="bg-gradient-to-r from-gray-300 to-white text-black px-8 py-4 rounded-lg hover:from-white hover:to-gray-200 transition transform hover:scale-110 hover:-translate-y-1 font-bold shadow-lg hover:shadow-2xl duration-300"
            >
              📥 Download Resume
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition transform hover:scale-110 hover:-translate-y-1 font-bold shadow-lg hover:shadow-white/30 duration-300"
            >
              💬 Let's Talk
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-8 border-t border-gray-700">
            <a
              href={resumeData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
            >
              <span className="text-2xl">💼</span>
              <span className="hidden sm:inline font-semibold">LinkedIn</span>
            </a>
            <a
              href={resumeData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
            >
              <span className="text-2xl">⭐</span>
              <span className="hidden sm:inline font-semibold">GitHub</span>
            </a>
            <a
              href={resumeData.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition transform hover:scale-110"
            >
              <span className="text-2xl">📷</span>
              <span className="hidden sm:inline font-semibold">Instagram</span>
            </a>
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition transform hover:scale-110"
            >
              <span className="text-2xl">📧</span>
              <span className="hidden sm:inline font-semibold">Email</span>
            </a>
          </div>
        </div>

        {/* Right - Profile Image */}
        <div className="flex justify-center items-center order-1 md:order-2 animate-float">
          <div className="relative w-64 h-80 md:w-80 md:h-96">
            {/* Outer animated glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-400 to-white rounded-3xl blur-3xl opacity-20 animate-pulse-black"></div>

            {/* Main image border with black accent */}
            <div className="relative rounded-3xl p-2 shadow-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-white">
              <div className="relative rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={process.env.PUBLIC_URL + '/profile.png'}
                  alt={resumeData.name}
                  className="w-full h-full object-cover object-center"
                  onLoad={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    (e.target as HTMLImageElement).style.display = 'block';
                  }}
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Cdefs%3E%3Cstyle%3E.initials%7Bfont-size:120px;font-weight:bold;fill:%23ffffff;font-family:Arial%7D%3C/style%3E%3C/defs%3E%3Crect fill='%23111111' width='400' height='500'/%3E%3Ccircle cx='200' cy='120' r='60' fill='%23888888'/%3E%3Crect x='80' y='240' width='240' height='150' fill='%23444444'/%3E%3Ctext x='200' y='350' text-anchor='middle' class='initials'%3EFR%3C/text%3E%3C/svg%3E";
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/5"></div>
              </div>
            </div>

            {/* Animated corner decorations */}
            <div className="absolute -top-6 -right-6 w-16 h-16 border-2 border-white border-opacity-30 rounded-full animate-spin-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 border-2 border-white border-opacity-20 rounded-full animate-pulse-scale"></div>
            
            {/* Floating accent circles */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-white to-gray-400 rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white rounded-full mix-blend-screen filter blur-2xl opacity-10 animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </section>
  );
};

export default Home;
