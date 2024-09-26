import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ParticlesBg from "particles-bg";

const Hero = () => {
  return (
    <>
      {/* Wrap the main content in a relative div and give it a higher z-index */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[95vh] md:min-h-screen px-4">
        <h1 className="mb-6 text-4xl font-bold text-center text-white md:mb-9 md:text-7xl">
          Hello,
          <br /> I'm PRAVEEN PR
        </h1>
        <p className="max-w-2xl mb-8 text-sm text-center text-white md:text-xl">
          A driven computer science student pursuing a bachelor's degree,
          skilled in React.js frontend development, proficient in Java
          programming, with experience in database management, and a
          foundational understanding of backend development.
        </p>

        <div className="flex space-x-6">
          {/* GitHub Icon */}
          <a
            href="https://github.com/PRAVEEN-PR-2004"
            className="text-3xl font-extrabold text-blue-600"
          >
            <TbBrandGithubFilled
              size={40}
              className="transition-transform duration-300 hover:scale-110 hover:text-blue-900"
            />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/praveen-p-r-15-09-2004-ttp/"
            className="text-3xl font-extrabold text-blue-500"
          >
            <FaLinkedinIn
              size={40}
              className="transition-transform duration-300 hover:scale-110 hover:text-blue-700"
            />
          </a>

          {/* LeetCode Icon */}
          <a
            href="https://leetcode.com/u/praveen2004ttp/"
            className="text-3xl font-extrabold text-orange-600"
          >
            <SiLeetcode
              size={40}
              className="transition-transform duration-300 hover:scale-110 hover:text-orange-700"
            />
          </a>
        </div>
      </div>

      {/* Particles background with a lower z-index */}
      <ParticlesBg
        type="circle"
        bg={{
          zIndex: 0, // Lower z-index so the particles stay behind the content
          position: "absolute",
          background: "black", // Set the background to black
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </>
  );
};

export default Hero;
