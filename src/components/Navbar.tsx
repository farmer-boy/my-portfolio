import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { downloadResume } from "../services/resumeService";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/experience", label: "Experience" },
    { path: "/education", label: "Education" },
    { path: "/projects", label: "Projects" },
    { path: "/cv", label: "CV" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${
      isDark
        ? 'bg-gradient-to-r from-slate-900/80 via-blue-900/80 to-slate-900/80 border-b border-cyan-500/20'
        : 'bg-gradient-to-r from-white/80 via-blue-50/80 to-white/80 border-b border-blue-200/50'
    } shadow-2xl`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${
              isDark
                ? 'from-blue-400 via-cyan-400 to-teal-400'
                : 'from-blue-600 via-blue-500 to-teal-600'
            } bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 flex items-center gap-2`}
          >
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${
              isDark
                ? 'from-blue-500 to-cyan-500'
                : 'from-blue-600 to-teal-600'
            } flex items-center justify-center shadow-lg`}>
              <span className="text-white font-bold text-sm sm:text-base">FR</span>
            </div>
            <span className="hidden sm:inline">Farhan</span>
          </Link>

          {/* Desktop Navigation + Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 font-semibold text-sm lg:text-base whitespace-nowrap ${
                      isActive(link.path)
                        ? isDark
                          ? 'bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-500/50'
                          : 'bg-gradient-to-r from-blue-500 via-blue-500 to-teal-500 text-white shadow-lg shadow-blue-300/50'
                        : isDark
                          ? 'text-gray-300 hover:text-cyan-300 hover:bg-blue-900/40'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-100/40'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isDark
                  ? 'bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30 border border-yellow-500/30'
                  : 'bg-slate-700/20 text-slate-700 hover:bg-slate-700/30 border border-slate-500/30'
              }`}
              title="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all ${
                isDark
                  ? 'bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30'
                  : 'bg-slate-700/20 text-slate-700 hover:bg-slate-700/30'
              }`}
              title="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-blue-900/30 rounded-lg transition"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className={`absolute top-full left-0 right-0 md:hidden flex flex-col gap-1 p-4 border-t backdrop-blur-md ${
            isDark
              ? 'bg-gradient-to-b from-slate-900/95 via-blue-900/95 to-slate-900/95 border-cyan-500/20'
              : 'bg-gradient-to-b from-white/95 via-blue-50/95 to-white/95 border-blue-200/50'
          } shadow-2xl`}>
            {navLinks.map((link, index) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 font-semibold ${
                    isActive(link.path)
                      ? isDark
                        ? 'bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-500/30'
                        : 'bg-gradient-to-r from-blue-500 via-blue-500 to-teal-500 text-white shadow-lg shadow-blue-300/30'
                      : isDark
                        ? 'text-gray-300 hover:bg-blue-800/40 hover:text-cyan-300'
                        : 'text-gray-700 hover:bg-blue-100/40 hover:text-blue-600'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-cyan-500/20">
              <button
                onClick={downloadResume}
                className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/50'
                    : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-400/50'
                }`}
              >
                📥 Download Resume
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
