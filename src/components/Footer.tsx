import React from "react";
import { useTheme } from "../context/ThemeContext";
import { SocialIcon } from "./SocialIcons";

const Footer: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`py-16 border-t transition-all ${
      isDark
        ? 'bg-gradient-to-r from-black via-gray-900 to-black text-white border-purple-500 border-opacity-20'
        : 'bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 text-gray-900 border-gray-300'
    }`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className={`text-2xl font-black bg-clip-text text-transparent mb-4 bg-gradient-to-r ${
              isDark
                ? 'from-gray-100 to-white'
                : 'from-gray-800 to-gray-600'
            }`}>
              Farhan Riaz
            </h3>
            <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Full Stack & Flutter Developer crafting beautiful digital solutions with passion and precision.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-purple-400' : 'text-blue-600'}`}>Navigation</h4>
            <ul className={`space-y-3 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
              <li>
                <a href="/" className={`hover:transition transform hover:translate-x-1 ${
                  isDark ? 'hover:text-purple-400' : 'hover:text-blue-600'
                }`}>
                  → Home
                </a>
              </li>
              <li>
                <a href="/about" className={`hover:transition transform hover:translate-x-1 ${
                  isDark ? 'hover:text-purple-400' : 'hover:text-blue-600'
                }`}>
                  → About
                </a>
              </li>
              <li>
                <a href="/projects" className={`hover:transition transform hover:translate-x-1 ${
                  isDark ? 'hover:text-purple-400' : 'hover:text-blue-600'
                }`}>
                  → Projects
                </a>
              </li>
              <li>
                <a href="/contact" className={`hover:transition transform hover:translate-x-1 ${
                  isDark ? 'hover:text-purple-400' : 'hover:text-blue-600'
                }`}>
                  → Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-purple-400' : 'text-blue-600'}`}>Expertise</h4>
            <ul className={`space-y-3 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
              <li className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-purple-400' : 'bg-blue-600'}`}></span>
                Full Stack Development
              </li>
              <li className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-purple-400' : 'bg-blue-600'}`}></span>
                Mobile Apps
              </li>
              <li className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-purple-400' : 'bg-blue-600'}`}></span>
                API Design
              </li>
              <li className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-purple-400' : 'bg-blue-600'}`}></span>
                UI/UX Optimization
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-purple-400' : 'text-blue-600'}`}>Connect</h4>
            <div className="space-y-4">
              <a
                href="https://linkedin.com/in/farhan-riaz-5224b0277"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 transition transform hover:scale-105 ${
                  isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                }`}
                aria-label="LinkedIn"
              >
                <SocialIcon platform="linkedin" size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/farmer-boy"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 transition transform hover:scale-105 ${
                  isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-700 hover:text-blue-600'
                }`}
                aria-label="GitHub"
              >
                <SocialIcon platform="github" size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.instagram.com/farhan_khan336/?__pwa=1"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 transition transform hover:scale-105 ${
                  isDark ? 'text-gray-400 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'
                }`}
                aria-label="Instagram"
              >
                <SocialIcon platform="instagram" size={20} />
                <span>Instagram</span>
              </a>
              <a
                href="mailto:subssems336@gmail.com"
                className={`flex items-center gap-3 transition transform hover:scale-105 ${
                  isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-700 hover:text-yellow-600'
                }`}
                aria-label="Email"
              >
                <SocialIcon platform="email" size={20} />
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
