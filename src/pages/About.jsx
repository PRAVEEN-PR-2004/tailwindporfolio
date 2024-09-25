import React from "react";
import myimg from "../assets/portfoliome.jpg";
const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="flex flex-col items-center max-w-4xl p-8 bg-white rounded-lg shadow-md md:flex-row">
        {/* Profile Image */}
        <div className="w-full mb-6 md:w-1/3 md:mb-0">
          <img
            src={myimg} // Replace this with your image URL
            alt="Profile"
            className="object-cover w-48 h-48 mx-auto rounded-full shadow-lg"
          />
        </div>

        {/* About Info */}
        <div className="w-full md:w-2/3 md:pl-8">
          <h1 className="mb-4 text-3xl font-bold text-gray-800">About Me</h1>
          <p className="leading-relaxed text-gray-600">
            Hi! I'm Praveen, a passionate frontend developer & freelancer. I
            enjoy crafting captivating digital experiences with a focus on clean
            design, seamless functionality, and user-centric development. With
            expertise in React, Tailwind CSS, and various other technologies, I
            aim to build impactful projects that solve real-world problems.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            When I'm not coding, I love exploring the latest web development
            trends, contributing to open-source projects, and learning new
            technologies. I believe in continuous growth, both as a developer
            and an individual, and strive to enhance my skills and knowledge
            every day.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Let's create something amazing together!
          </p>

          {/* Download Resume Button */}
          <a
            href="/path-to-your-resume.pdf" // Replace with your resume's file path
            download
            className="inline-block px-6 py-3 mt-6 text-white transition-all duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
