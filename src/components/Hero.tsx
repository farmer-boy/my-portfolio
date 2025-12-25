import React from "react";
import { resumeData } from "../data/resumeData";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="w-full h-screen flex items-center justify-between px-24 bg-gray-50">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold">{resumeData.name}</h1>
        <h2 className="text-2xl mt-2">{resumeData.title}</h2>
        <p className="text-gray-700 mt-4">{resumeData.summary}</p>
        <div className="mt-6 flex gap-4">
          <a href="/resume.pdf" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Download Resume</a>
          <a href="#contact" className="bg-yellow-400 text-gray-900 px-6 py-2 rounded hover:bg-yellow-500">Contact Me</a>
        </div>
      </div>
      <div>
        <img src="/assets/profile.png" alt="Profile" className="w-72 h-72 rounded-full object-cover"/>
      </div>
    </section>
  );
};

export default Hero;
