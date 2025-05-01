import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import Project9 from "../assets/project-9.png"
import Project10 from '../assets/project-10.png';
function ProjectsPage() {
    const [customThumbnails, setCustomThumbnails] = useState({});
    // Get image source for a specific project
    const getImageSource = (project) => {
      if (customThumbnails[project.id]) return customThumbnails[project.id];
      if (project.thumbnail) return project.thumbnail;
      return project.id === "pidgin-pal" ? Project9 : Project10;
    };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-[5rem]">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my professional work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Thumbnail */}
              <div className="h-48 overflow-hidden">
                <img
                  src={getImageSource(project)}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {project.stack[0]} {/* Shows primary tech */}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{project.shortDescription}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      +{project.stack.length - 3} more
                    </span>
                  )}
                </div>

                {/* View Button */}
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {projectsData.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No projects yet
            </h3>
            <p className="text-gray-500">
              Check back later for updates on my latest work
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;