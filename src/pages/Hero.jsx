import HeroImg from "../assets/tailwindimg2.png";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";


export default function Hero() {
  return (
    <>
    <br/>
      <section className="flex flex-col justify-center h-screen px-5 pt-5 md:flex-row bg-dark">
        <div className="flex flex-col justify-center w-full px-4 md:items-center md:w-1/2 md:px-0 " >
          <div className="flex flex-col">
            
            <h1 className="text-4xl font-bold md:text-7xl color-primary ">
              <span className="text-5xl color-secondary md:text-7xl">Hi,</span>
              <br /> I'm Praveen PR
              <p className="text-2xl">I'm a MERN-stack developer</p>
            </h1>
          <div className="flex pt-4 space-x-5">
            <a href="#" className="text-3xl hover:text-blue-900">
              <TbBrandGithubFilled size={40} />
            </a>
            <a href="#" className="text-3xl hover:text-blue-500">
              <FaLinkedinIn size={40} />
            </a>
            <a href="#" className="text-3xl hover:text-orange-600">
              <SiLeetcode size={40} />
            </a>
          </div>
          </div>

        </div>
        <div className="flex items-center justify-center w-full pt-10 md:w-1/2 md:pt-0" >
          <div className="flex items-center justify-center md:w-3/4">
            
        <img className="" src={HeroImg} alt="Hero Image" />
          </div>
        </div>
      </section>
    </>
  );
}
