import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16 relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none">
        <div className="w-96 h-96 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Main Title */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 relative">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-fadeInUp drop-shadow-2xl">
          {title}
        </span>
      </h1>

      {/* Underline decoration */}
      <div className="flex justify-center gap-3 mb-6">
        <div className="h-1.5 w-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
        <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        <div className="h-1.5 w-12 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"></div>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent animate-slideDown max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-8"></div>
    </div>
  );
};

export default SectionTitle;
