import React from "react";
import { Slide } from "react-awesome-reveal";
const skills = [
  { name: "JAVA", percentage: "75%", color: "btn-primary" },
  { name: "REACT", percentage: "55%", color: "btn-primary" },
  { name: "BOOTSTRAP", percentage: "80%", color: "btn-primary" },
  { name: "TAILWIND-CSS", percentage: "50%", color: "btn-primary" },
  { name: "NODEJS", percentage: "30%", color: "btn-primary" },
  { name: "EXPRESS", percentage: "35%", color: "btn-primary" },
  { name: "MONGODB", percentage: "35%", color: "btn-primary" },
];

const Skills = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen pt-28 md:pt-16 bg-dark ">
      <div className="w-2/3 mx-auto space-y-4 md:w-1/3">
        <h1 className="text-lg font-semibold text-center text-gray-900 ">
          SKILLS
        </h1>
        <div className="w-16 h-1 mx-auto mb-6 bg-gray-400 rounded"></div>
        <Slide duration={1000} triggerOnce>
          {skills.map((skill, index) => (
            <div key={index}>
              <p className="pb-5 text-sm font-bold md:text-lg black-color">
                {skill.name}
              </p>
              <div className="w-full pb-5 bg-gray-800 rounded md:h-9 h-7">
                <div
                  className={`${skill.color} md:h-9 rounded h-7`}
                  style={{ width: skill.percentage }}
                ></div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Skills;
