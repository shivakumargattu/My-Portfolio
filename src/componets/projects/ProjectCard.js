import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className='flex justify-between'>
       
     <div>
     <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-white border-none px-4 py-2 border-2  rounded  transition"
        >
          View Project
        </a>
     </div>
     <div>
     <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-slate-100 text-black mx-6 px-4 py-2 border-none rounded  transition"
        >
          github repo
        </a>
     </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default ProjectCard;