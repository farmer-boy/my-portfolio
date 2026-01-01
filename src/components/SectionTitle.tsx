import React from "react";
import { useTheme } from "../context/ThemeContext";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  const { isDark } = useTheme();

  return (
    <div className="text-center mb-16 relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none">
        <div className={`w-96 h-96 rounded-full filter blur-3xl opacity-20 animate-pulse ${
          isDark
            ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500'
            : 'bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400'
        }`}></div>
      </div>

      {/* Main Title */}
      <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-6 relative ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        <span className={`bg-clip-text text-transparent animate-fadeInUp drop-shadow-2xl ${
          isDark
            ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500'
            : 'bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600'
        }`}>
          {title}
        </span>
      </h1>

      {/* Underline decoration */}
      <div className="flex justify-center gap-3 mb-6">
        <div className={`h-1.5 w-12 rounded-full ${
          isDark
            ? 'bg-gradient-to-r from-cyan-400 to-blue-400'
            : 'bg-gradient-to-r from-blue-500 to-cyan-500'
        }`}></div>
        <div className={`h-1.5 w-20 rounded-full ${
          isDark
            ? 'bg-gradient-to-r from-blue-500 to-purple-500'
            : 'bg-gradient-to-r from-cyan-500 to-purple-500'
        }`}></div>
        <div className={`h-1.5 w-12 rounded-full ${
          isDark
            ? 'bg-gradient-to-r from-purple-500 to-cyan-400'
            : 'bg-gradient-to-r from-purple-500 to-blue-500'
        }`}></div>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className={`text-xl md:text-2xl font-semibold animate-slideDown max-w-3xl mx-auto leading-relaxed ${
          isDark
            ? 'text-gray-300'
            : 'text-gray-700'
        }`}>
          {subtitle}
        </p>
      )}

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 mt-8 bg-gradient-to-r from-transparent via-transparent ${
        isDark
          ? 'via-cyan-400'
          : 'via-blue-500'
      } to-transparent`}></div>
    </div>
  );
};

export default SectionTitle;
