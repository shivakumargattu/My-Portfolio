import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from './data';

const ProjectList = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <section id="projects" className="py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        
        {/* Filter Buttons */}
        <div className="flex justify-center mb-8 gap-4">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter('fullstack')}
            className={`px-4 py-2 rounded ${filter === 'fullstack' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
          >
            Full Stack
          </button>
          <button 
            onClick={() => setFilter('frontend')}
            className={`px-4 py-2 rounded ${filter === 'frontend' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
          >
            Frontend
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;