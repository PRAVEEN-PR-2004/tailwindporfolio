import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setToggleMenu(false); // Close the mobile menu after clicking a link
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 flex justify-between w-full px-5 py-2 bg-white md:shadow-md">
        <a href="#" className="font-bold text-black color-primary">
          PORTFOLIO
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex">
            <li className="relative px-4 text-md color-secondary group">
              <a
                href="#hero"
                className="transition hover:text-indigo-950"
                onClick={() => scrollToSection("hero")}
              >
                HOME
              </a>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-1/2"></span>
            </li>
            <li className="relative px-4 text-md color-secondary group">
              <a
                href="#about"
                className="transition hover:text-indigo-950"
                onClick={() => scrollToSection("about")}
              >
                ABOUT
              </a>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-1/2"></span>
            </li>
            <li className="relative px-4 text-md color-secondary group">
              <a
                href="#skills"
                className="transition hover:text-indigo-950"
                onClick={() => scrollToSection("skills")}
              >
                SKILLS
              </a>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-1/2"></span>
            </li>
            <li className="relative px-4 text-md color-secondary group">
              <a
                href="#projects"
                className="transition hover:text-indigo-950"
                onClick={() => scrollToSection("projects")}
              >
                PROJECTS
              </a>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-blue-900 transition-all duration-300 group-hover:w-1/2"></span>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <nav
          className={`${
            toggleMenu ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-700 ease-in-out block md:hidden mobile-menu`}
        >
          <ul className="flex flex-col">
            <li className="px-2 py-3 text-sm font-semibold text-center color-secondary">
              <a href="#hero" onClick={() => scrollToSection("hero")}>
                HOME
              </a>
            </li>
            <li className="px-2 py-3 text-sm font-semibold text-center color-secondary">
              <a href="#about" onClick={() => scrollToSection("about")}>
                ABOUT
              </a>
            </li>
            <li className="px-2 py-3 text-sm font-semibold text-center color-secondary">
              <a href="#skills" onClick={() => scrollToSection("skills")}>
                SKILLS
              </a>
            </li>
            <li className="px-2 py-3 text-sm font-semibold text-center color-secondary">
              <a href="#projects" onClick={() => scrollToSection("projects")}>
                PROJECTS
              </a>
            </li>
          </ul>
        </nav>

        {/* Toggle Button */}
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="block md:hidden"
        >
          {toggleMenu ? (
            <XMarkIcon className="h-5 text-black" />
          ) : (
            <Bars3Icon className="h-5 text-black" />
          )}
        </button>
      </header>
    </>
  );
}
