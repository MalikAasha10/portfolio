import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiApachenetbeanside } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const skills = {
  Frontend: [
    { name: "React.js", icon: <FaReact className="inline mr-1 text-sky-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="inline mr-1 text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="inline mr-1 text-cyan-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="inline mr-1 text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="inline mr-1 text-blue-500" /> },
    { name: "Responsive Design", icon: <MdDesignServices className="inline mr-1 text-green-500" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="inline mr-1 text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="inline mr-1 text-gray-700 dark:text-gray-200" /> },
    { name: "APIs", icon: <SiApachenetbeanside className="inline mr-1 text-indigo-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="inline mr-1 text-green-700" /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="inline mr-1 text-orange-600" /> },
  ],
};

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4 mb-32 bg-white dark:bg-gray-800 rounded-xl shadow">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400">About Me</h2>
      <p className="text-gray-700 dark:text-gray-200 mb-8 text-lg">
        Self-motivated and passionate full-stack developer skilled in the MERN stack (MongoDB, Express.js, React, Node.js). Experienced in building responsive web applications, integrating RESTful APIs, and working with authentication systems. Eager to contribute to meaningful projects and grow as a developer in a collaborative environment.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-300 text-center">{category}</h3>
            <div className="flex flex-col gap-3">
              {skillList.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center bg-white dark:bg-gray-700 rounded shadow p-3 font-medium text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About; 
