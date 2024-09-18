import HeroImg from "../assets/tailwindimg2.png";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";


export default function Hero() {
  return (
    <>
    
      <section className="flex flex-col justify-center px-5 pt-32 md:flex-row bg-dark">
        <div className="flex flex-col md:w-1/2 md:py-32">
          <h1 className="text-5xl font-bold md:text-6xl color-primary">
            <span className="color-secondary">Hi,</span>
            <br /> I'm Praveen PR
            <p className="text-2xl">I'm a MERN-stack developer</p>
          </h1>

          <div className="flex mt-4 space-x-6">
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

        <img className="pt-8 md:w-1/3 md:py-0" src={HeroImg} alt="Hero Image" />
      </section>
    </>
  );
}
