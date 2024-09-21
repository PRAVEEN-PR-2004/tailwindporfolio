import React from 'react';

const CircularProgress = ({ percentage, skillName }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center m-4">
      <h3 className="mb-2 text-lg font-medium text-white">{skillName}</h3>
      <svg
        className="w-32 h-32"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#e5e7eb"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#6366f1"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-xl font-bold text-black fill-current"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

const Skills = () => {
    const skills = [
      { name: 'React', percentage: 85 },
      { name: 'JavaScript', percentage: 90 },
      { name: 'CSS', percentage: 80 },
      { name: 'Tailwind CSS', percentage: 75 },
      { name: 'Java', percentage: 70 },
      { name: 'MySQL', percentage: 65 },
      { name: 'Node.js', percentage: 60 }
    ];
  
    return (
      <div className="flex flex-wrap items-center justify-center w-4/5 min-h-screen mx-auto bg-slate-50">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex justify-center w-full p-2 sm:w-1/2 md:w-1/4 lg:w-1/5"
          >
            <CircularProgress skillName={skill.name} percentage={skill.percentage} />
          </div>
        ))}
      </div>
    );
  };
  
  
  

export default Skills;
