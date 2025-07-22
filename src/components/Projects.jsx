import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern, responsive portfolio built with React and Tailwind CSS.",
    link: "#",
  },
  {
    title: "E-commerce UI",
    desc: "A clean e-commerce frontend with product grid and cart features.",
    link: "#",
  },
  {
    title: "Blog Platform",
    desc: "A minimal blog platform with markdown support.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4 mb-32">
      <h2 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-400">Projects</h2>
      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-shadow duration-200 p-6 group"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-300 group-hover:underline">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-2">{project.desc}</p>
            <span className="text-blue-500 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">View Project →</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects; 