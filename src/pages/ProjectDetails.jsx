import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import projectsData from '../data/projects.json';
import { FaAngleLeft, FaGithub } from 'react-icons/fa6';
import LinkingButton from '../components/LinkingButton';
import Project9 from "../assets/project-9.png"
import Project10 from '../assets/project-10.png';
function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) return <div className='text-center py-20 '>Project not found</div>;
  const [customThumbnails, setCustomThumbnails] = useState({});
  // Get image source for a specific project
  const getImageSource = (project) => {
    if (customThumbnails[project.id]) return customThumbnails[project.id];
    if (project.thumbnail) return project.thumbnail;
    return project.id === "pidgin-pal" ? Project9 : Project10;
  };
  return (
    <div className='max-w-4xl mx-auto py-12 px-3 pt-[5rem]'>
      <div className='mb-8'>
        <img
          src={getImageSource(project)}
          alt={project.title}
          className='w-full h-auto rounded-xl shadow-md'
        />
      </div>

      <h1 className='text-3xl font-bold text-gray-800 mb-4'>{project.title}</h1>

      <p className='text-gray-700 text-lg mb-8'>{project.fullDescription}</p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>Tech Stack</h2>
          <div className='flex flex-wrap gap-2'>
            {project.stack.map(tech => (
              <span key={tech} className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full'>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>Key Features</h2>
          <ul className='list-disc pl-5 space-y-2 text-gray-700'>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className='w-full md:w-1/2 flex gap-4 p-2 overflow-hidden relative'>
        <Link
          to={`/`}
          className=' flex  items-center whitespace-nowrap px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors'
        >
          <FaAngleLeft size={15} className=' font-bold float-left ' /> Back to Projects
        </Link>
        {project.github_status ? (
            <LinkingButton
            to={project.github_url}
            text="Vew in Github"
            icon={<FaGithub />}
            isExternal={true}
            target="_blank"
            className='whitespace-nowrap'
          />
          ) : (
            <LinkingButton
          to={project.project_url}
          text="Visit Project"
          isExternal={true}
          target="_blank"
          className='whitespace-nowrap'
        />
          )}
      </div>
    </div>
  );
}

export default ProjectDetail;