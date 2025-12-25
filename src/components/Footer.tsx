import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 border-t border-purple-500 border-opacity-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent mb-4">
              Farhan Riaz
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack & Flutter Developer crafting beautiful digital solutions with passion and precision.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold text-purple-400 mb-4">Navigation</h4>
            <ul className="text-gray-400 space-y-3">
              <li>
                <a href="/" className="hover:text-purple-400 transition transform hover:translate-x-1">
                  → Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-purple-400 transition transform hover:translate-x-1">
                  → About
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-purple-400 transition transform hover:translate-x-1">
                  → Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-purple-400 transition transform hover:translate-x-1">
                  → Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-purple-400 mb-4">Expertise</h4>
            <ul className="text-gray-400 space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Full Stack Development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Mobile Apps
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                API Design
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                UI/UX Optimization
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-bold text-purple-400 mb-4">Connect</h4>
            <div className="space-y-4">
              <a
                href="https://linkedin.com/in/farhan-riaz-5224b0277"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition transform hover:scale-105"
              >
                <span className="text-2xl">💼</span>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/farmer-boy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition transform hover:scale-105"
              >
                <span className="text-2xl">⭐</span>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.instagram.com/farhan_khan336/?__pwa=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition transform hover:scale-105"
              >
                <span className="text-2xl">📷</span>
                <span>Instagram</span>
              </a>
              <a
                href="mailto:subssems336@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition transform hover:scale-105"
              >
                <span className="text-2xl">📧</span>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="border-t border-purple-500 border-opacity-20 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Farhan Riaz. All rights reserved. | Built with{" "}
            <span className="text-gray-300">React</span>,{" "}
            <span className="text-gray-300">TypeScript</span> &{" "}
            <span className="text-purple-400">Tailwind CSS</span>
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
