import React from 'react';
import pdf from '../assets/Professional CV Resume (2) (1).pdf'; // Correct import of the PDF 
import HeroImg from "../assets/tailwindimg2.png";

const About = () => {
  return (
    <section className="flex flex-col justify-center h-screen px-5 pt-5 md:flex-row bg-dark">
      <div className="flex flex-col justify-center w-full px-4 md:items-center md:w-1/2 md:px-0">
  {/* Information Section */}
  <div className="flex flex-col items-center text-center md:items-start md:text-left">
    <h2 className="mb-4 text-2xl font-bold md:text-4xl">About Me</h2>
    <div className="w-16 h-1 mx-auto mb-6 bg-gray-400 rounded md:hidden"></div>
    <p className="max-w-md mb-6 text-sm md:text-lg">
      I am a passionate computer science student with a strong interest in project management and development. 
      I constantly strive to improve my skills and knowledge in the field of technology.
    </p>

    {/* Resume Download Button */}
    <div className="flex justify-center pt-4 space-x-5 md:justify-start">
      <a 
        href={pdf} 
        download 
        className="px-4 py-2 font-semibold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-800"
      >
        Download Resume
      </a>
    </div>
  </div>
</div>


      {/* Image Section */}
      <div className="flex items-center justify-center w-full pt-10 md:w-1/2 md:pt-0">
        <div className="flex items-center justify-center md:w-3/4">
          <img className="" src={HeroImg} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default About;
