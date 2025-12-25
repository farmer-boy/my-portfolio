import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { path: "/", label: "🏠 Home" },
    { path: "/about", label: "👤 About" },
    { path: "/skills", label: "⚡ Skills" },
    { path: "/experience", label: "💼 Experience" },
    { path: "/education", label: "🎓 Education" },
    { path: "/projects", label: "🚀 Projects" },
    { path: "/contact", label: "📧 Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gradient-to-r from-slate-900/80 via-blue-900/80 to-slate-900/80 border-b border-cyan-500/20 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 flex items-center gap-2"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm sm:text-base">FR</span>
            </div>
            <span className="hidden sm:inline">Farhan</span>
          </Link>

          {/* Mobile menu button */}
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

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 font-semibold text-sm lg:text-base whitespace-nowrap ${
                    isActive(link.path)
                      ? "bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-500/50"
                      : "text-gray-300 hover:text-cyan-300 hover:bg-blue-900/40"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="absolute top-full left-0 right-0 md:hidden bg-gradient-to-b from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-md flex flex-col gap-1 p-4 border-t border-cyan-500/20 shadow-2xl">
            {navLinks.map((link, index) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 font-semibold ${
                    isActive(link.path)
                      ? "bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-500/30"
                      : "text-gray-300 hover:bg-blue-800/40 hover:text-cyan-300"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
