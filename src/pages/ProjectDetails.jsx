import React from 'react';
import { Link, useParams } from 'react-router-dom';
import projectsData from '../data/projects.json';

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) return <div className='text-center py-20 '>Project not found</div>;

  return (
    <div className='max-w-4xl mx-auto py-12 px-2 pt-[5rem]'>
      <div className='mb-8'>
        <img 
          src={project.fullImage} 
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
      
      <Link
        to='/projects'
        className='inline-block px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors'
      >
        ← Back to Projects
      </Link>
    </div>
  );
}

export default ProjectDetail;