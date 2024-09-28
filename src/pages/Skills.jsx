import React from "react";
import { Slide } from "react-awesome-reveal";
const skills = [
  { name: "PYTHON", percentage: "80%", color: "bg-sky-400" },
  { name: "MACHINE LEARNING", percentage: "70%", color: "bg-sky-400" },
  { name: "EXCEL", percentage: "80%", color: "bg-sky-400" },
  { name: "POWER BI", percentage: "80%", color: "bg-sky-400" },
];

const Skills = () => {
  return (
    <div className="flex items-center justify-center w-full h-[70vh] pt-28 md:pt-16 bg-dark ">
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
              <div className="w-full pb-5 bg-gray-200 rounded md:h-9 h-7">
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
