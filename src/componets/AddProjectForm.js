// AddProjectForm.js
import React, { useState, useEffect } from 'react';
import AddedProjectsList from './AddedProjectsList';

const AddProjectForm = ({ onAddProject }) => {
  const [projectName, setProjectName] = useState('');
  const [projectUrl, setProjectUrl] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectImage, setProjectImage] = useState('');
  const [addedProjects, setAddedProjects] = useState([]);

  // Load projects from localStorage on component mount
  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setAddedProjects(storedProjects);
  }, []);

  // Save projects to localStorage whenever addedProjects state changes
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(addedProjects));
  }, [addedProjects]);

  const handleAddProject = () => {
    if (projectName && projectUrl && projectDescription && projectImage) {
      const newProject = {
        name: projectName,
        link: projectUrl,
        description: projectDescription,
        image: projectImage,
      };

      // Update the state to include the new project
      setAddedProjects((prevProjects) => [...prevProjects, newProject]);

      // Clear the form after adding the project
      setProjectName('');
      setProjectUrl('');
      setProjectDescription('');
      setProjectImage('');
    } else {
      // Handle validation or show an error message
      console.log('Please fill in all project details.');
    }
  };

  return (
    <div className=' bg-slate-100'>
    <div className="max-w-3xl mx-auto mt-6 p-4  ">
      <h1 className="text-4xl text-gray-700 font-bold underline underline-offset-3 decoration-yellow-400 text-center mb-4">Add Project</h1>
      <div className="mb-4">
        {/* ... (form fields) */}


        <div className="mb-4">

      <div className="mb-4">
        <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
          Project Name
        </label>
        <input
          type="text"
          id="projectName"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          placeholder="Enter project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="projectUrl" className="block text-sm font-medium text-gray-700">
          Project URL
        </label>
        <input
          type="text"
          id="projectUrl"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          placeholder="Enter project URL"
          value={projectUrl}
          onChange={(e) => setProjectUrl(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
          Project Description
        </label>
        <textarea
          id="projectDescription"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          placeholder="Enter project description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="projectImage" className="block text-sm font-medium text-gray-700">
          Project Image URL
        </label>
        <input
          type="text"
          id="projectImage"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          placeholder="Enter project image URL"
          value={projectImage}
          onChange={(e) => setProjectImage(e.target.value)}
        />
      </div>
   
        {/* ... (form fields) */}
      </div>
      </div>
      <button
        className="bg-yellow-500 text-black px-3 py-1 rounded text-2xl"
        onClick={handleAddProject}

      >
        Add 
      </button>

      {/* Display added projects using AddedProjectsList component */}
      
    </div>
    <div className='text-center'>
    <AddedProjectsList addedProjects={addedProjects} />
    </div>
    </div>
  );
};

export default AddProjectForm;
