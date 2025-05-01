import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import LinkingButton from '../components/LinkingButton'
import { FaAngleRight } from "react-icons/fa6";
import Project9 from '../assets/project-9.png';
import Project10 from '../assets/project-10.png';

function Projects() {
  // State to track custom thumbnails for each project
  const [customThumbnails, setCustomThumbnails] = useState({});
  // Get image source for a specific project
  const getImageSource = (project) => {
    if (customThumbnails[project.id]) return customThumbnails[project.id];
    if (project.thumbnail) return project.thumbnail;
    return project.id === "pidgin-pal" ? Project9 : Project10;
  };

  return (
    <div className='bg-white w-full mt-40 md:ml-16 max-w-6xl mx-auto'>
      <h1 className='text-2xl md:text-4xl font-bold text-gray-800 mb-12 text-center md:text-left'>
        A Peek Into My Work
      </h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {projectsData.slice(0, 4).map((project) => (
          <div key={project.id} className='border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
            <div className='h-48 overflow-hidden relative'>
              <img 
                src={getImageSource(project)}
                alt={project.title}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-bold text-gray-800 mb-2'>{project.title}</h2>
              <h3 className='text-lg text-gray-600 mb-4'>{project.subtitle}</h3>
              <p className='text-gray-700 mb-6'>{project.shortDescription}</p>
              
              <div className='flex flex-wrap gap-2 mb-6'>
                {project.stack.slice(0, 4).map(tag => (
                  <span key={tag} className='bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700'>
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link
                to={`/projects/${project.id}`}
                className='flex w-[60%] items-center whitespace-nowrap px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
              >
                View Project <FaAngleRight size={15} className='ml-3 font-bold float-right'/>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full flex text-center justify-center'>
        <LinkingButton
          to="/projects"
          text="View All"
          className='mt-9'
          isExternal={false}
          target="_self"
        />
      </div>
    </div>
  );
}

export default Projects;