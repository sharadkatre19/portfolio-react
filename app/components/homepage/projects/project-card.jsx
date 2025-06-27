// @flow strict

import * as React from 'react';
import GlowCard from '../../helper/glow-card';
import Image from "next/image";

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [hoveredCard, setHoveredCard] = React.useState(null);

  return (
    <GlowCard key={project.id} identifier={`experience-${project.id}`}
      className="transform transition-all duration-300 hover:scale-[1.02]">
      <div
        className={`p-6 relative text-white cursor-pointer transition-all duration-300 ${hoveredCard === project.id ? 'bg-gradient-to-r from-[#9fccfa]/20 to-[#0974f1]/20' : ''
          }`}
        onMouseEnter={() => setHoveredCard(project.id)}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={() => toggleCard(project.id)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleCard(project.id);
          }
        }}
        aria-describedby={`project-details-${project.id}`}
      >

        <Image
          src="/blur-23.svg"
          alt=""
          width={1080}
          height={200}
          className="absolute bottom-0 right-0 opacity-30"
          role="presentation"
        />

        <div className="relative z-10 p-6 lg:p-8">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {project.name}
                </h3>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {project.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Status indicator */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500 font-medium">Active</span>
            </div>
          </div>

          {/* Description Section */}
          <div className="mb-6">
            <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
              {project.description}
            </p>
          </div>

          {/* Technologies Section */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
              <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-100 hover:border-blue-200 hover:shadow-sm transition-all duration-200 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Action Section */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>View Project</span>
              </button>

              <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 font-medium text-sm transition-colors duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span>Live Demo</span>
              </button>
            </div>

            {/* Hover indicator */}
            <div className={`flex items-center space-x-1 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}>
              <span className="text-xs text-gray-400">Explore</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-500 blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-lg"></div>
      </div>
    </GlowCard>
  );
}

export default ProjectCard;