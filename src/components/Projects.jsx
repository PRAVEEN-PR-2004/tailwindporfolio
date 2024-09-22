import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'A short description of Project 1. This project showcases React and Tailwind CSS integration.',
    image: 'https://via.placeholder.com/300x200', // Replace with your project image URL
    liveDemo: '#', // Replace with the live demo URL
    sourceCode: '#', // Replace with the source code URL
  },
  {
    title: 'Project 2',
    description: 'A short description of Project 2. This project highlights full-stack development with Node.js.',
    image: 'https://via.placeholder.com/300x200', // Replace with your project image URL
    liveDemo: '#',
    sourceCode: '#',
  },
  {
    title: 'Project 1',
    description: 'A short description of Project 1. This project showcases React and Tailwind CSS integration.',
    image: 'https://via.placeholder.com/300x200', // Replace with your project image URL
    liveDemo: '#', // Replace with the live demo URL
    sourceCode: '#', // Replace with the source code URL
  },
  {
    title: 'Project 2',
    description: 'A short description of Project 2. This project highlights full-stack development with Node.js.',
    image: 'https://via.placeholder.com/300x200', // Replace with your project image URL
    liveDemo: '#',
    sourceCode: '#',
  },
  {
    title: 'Project 1',
    description: 'A short description of Project 1. This project showcases React and Tailwind CSS integration.',
    image: 'https://via.placeholder.com/300x200', // Replace with your project image URL
    liveDemo: '#', // Replace with the live demo URL
    sourceCode: '#', // Replace with the source code URL
  },
  {
    title: 'Project 2',
    description: 'A short description of Project 2. This project highlights full-stack development with Node.js.',
    image: 'https://via.placeholder.com/300x200', // Replace with your project image URL
    liveDemo: '#',
    sourceCode: '#',
  },
  {
    title: 'Project 1',
    description: 'A short description of Project 1. This project showcases React and Tailwind CSS integration.',
    image: 'https://via.placeholder.com/300x200', // Replace with your project image URL
    liveDemo: '#', // Replace with the live demo URL
    sourceCode: '#', // Replace with the source code URL
  },
  {
    title: 'Project 2',
    description: 'A short description of Project 2. This project highlights full-stack development with Node.js.',
    image: 'https://via.placeholder.com/300x200', // Replace with your project image URL
    liveDemo: '#',
    sourceCode: '#',
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 p-6 bg-gray-100 bg-primary">
         <h1 className="text-lg font-semibold text-center text-gray-900 ">PROJECTS</h1>
         <div className="w-16 h-1 mx-auto mb-6 bg-gray-400 rounded"></div>
    <div className='flex flex-wrap w-full md:w-1/2 gap-11'>
      {projects.map((project, index) => (
        <div
          key={index}
          className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg"
        >
          {/* Project Image */}
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-48"
          />

          {/* Project Info */}
          <div className="p-4">
            <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
            <p className="mb-4 text-gray-700">{project.description}</p>

            {/* Buttons */}
            <div className="flex justify-between">
              <a
                href={project.liveDemo}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
              <a
                href={project.sourceCode}
                className="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Projects;
