import React from 'react';
import ProjectData from './ProjectData'; // Make sure to adjust the import path based on your file structure
import { Fade } from "react-awesome-reveal";
const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 p-6 bg-primary">
      <h1 className="text-lg font-semibold text-center text-gray-900">MY PROJECTS</h1>
      <div className="w-16 h-1 mx-auto mb-6 bg-gray-400 rounded"></div>
      
      {/* Centered Grid Layout */}
      <div className='flex w-full'>
        <div className='grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 md:gap-10'>
          {/* <Fade duration={2000} triggerOnce> */}
          {ProjectData.map((project, index) => (
              
            
            <div
              key={index}
              className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg"
            >
              {/* Project Image */}
              <img
                src={project.imgsrc}
                alt={project.title}
                className="object-cover w-full h-48"
              />

              {/* Project Info */}
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-gray-700">{project.text}</p>

                {/* Buttons */}
                <div className="flex justify-between">
                  {project.view && (
                    <a
                      href={project.view}
                      className="px-4 py-2 text-white rounded btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  )}
                  {project.source && (
                    <a
                      href={project.source}
                      className="px-4 py-2 text-white rounded btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
          {/* </Fade> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
