import React from "react";
import { resumeData } from "../data/resumeData";

const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-24 px-24 bg-white">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-gray-700 text-lg">{resumeData.summary}</p>
      <div className="mt-6 grid grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold">Location</h3>
          <p>{resumeData.location}</p>
        </div>
        <div>
          <h3 className="font-semibold">Contact</h3>
          <p>Email: {resumeData.contact.email}</p>
          <p>Phone: {resumeData.contact.phone}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
