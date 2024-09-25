import React from "react";

const skills = [
  { name: "PYTHON", percentage: "75%", color: "bg-lime-500" },
  { name: "REACT", percentage: "65%", color: "bg-purple-500" },
  { name: "NEXTJS", percentage: "60%", color: "bg-cyan-400" },
  { name: "TAILWIND-CSS", percentage: "50%", color: "bg-sky-300" },
  { name: "NODEJS", percentage: "35%", color: "bg-pink-300" },
  { name: "EXPRESS", percentage: "30%", color: "bg-green-700" },
];

const Skills = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-dark">
      <div className="w-2/3 mx-auto space-y-4 md:w-1/3">
        <h1 className="text-lg font-semibold text-center text-gray-900 ">
          SKILLS
        </h1>
        <div className="w-16 h-1 mx-auto mb-6 bg-gray-400 rounded"></div>
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
      </div>
    </div>
  );
};

export default Skills;
