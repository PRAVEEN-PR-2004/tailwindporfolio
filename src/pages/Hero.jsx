import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ParticlesBg from "particles-bg";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import About from "./About";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[80vh] md:min-h-screen px-4">
        <h1 className="mb-6 text-4xl font-bold text-center text-white md:mb-9 md:text-7xl">
          Hello,
          <br /> I'm PRAVEEN PR
        </h1>
        <p className="max-w-2xl mb-8 text-sm text-center text-gray-300 md:text-xl">
          A dedicated and enthusiastic computer science student actively working
          towards a bachelor's degree. Beyond technical prowess, I bring a
          multifaceted approach to my work with a penchant for project
          management.
        </p>

        <div className="flex space-x-6">
          {/* GitHub Icon */}
          <a href="#" className="text-3xl hover:text-blue-900">
            <TbBrandGithubFilled size={40} />
          </a>

          {/* LinkedIn Icon */}
          <a href="#" className="text-3xl hover:text-blue-500">
            <FaLinkedinIn size={40} />
          </a>

          {/* LeetCode Icon */}
          <a href="#" className="text-3xl hover:text-orange-600">
            <SiLeetcode size={40} />
          </a>
        </div>
      </div>

      <ParticlesBg
        type="circle"
        bg={true}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default Hero;
