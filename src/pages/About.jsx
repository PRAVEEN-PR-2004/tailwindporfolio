import React from "react";
import myimg from "../assets/portfoliome.jpg";
import resume from "../assets/Professional CV Resume (2) (1).pdf";
const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-white">
      <div className="flex flex-col items-center p-8 bg-gray-100 rounded-lg shadow-md md:max-w-6xl md:p-20 md:flex-row">
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
            love frontend development and Java programming, and I enjoy crafting
            captivating digital experiences with a focus on clean design,
            seamless functionality, and user-centric development. With expertise
            in React, Tailwind CSS, and various other technologies, I also know
            data structures and algorithms (DSA) in Java and am a MERN stack
            developer, where I leverage MongoDB, Express.js, React, and Node.js
            to build dynamic web applications.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            I have solved 170+ problems on LeetCode in Java and have completed
            many projects related to web development. I believe in continuous
            growth, both as a developer and an individual, and strive to enhance
            my skills and knowledge every day.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Let's create something amazing together!
          </p>

          {/* Download Resume Button */}
          <a
            href={resume} // Replace with your resume's file path
            download
            className="inline-block px-6 py-3 mt-6 text-white transition-all duration-300 rounded-lg shadow-md btn-primary"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
