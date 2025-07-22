import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-8 md:pt-16 animate-fade-in bg-white dark:bg-gray-900">
      <img
        // src="/profile.png"
        src="profile.png"
        alt="Profile"
        className="w-40 h-40 rounded-full shadow-lg mb-6 object-cover border-4 border-white dark:border-gray-700"
        style={{ background: 'none' }}
      />
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-700 dark:text-blue-400">Hi, I'm Aashan Ashraf</h1>
      <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-6 max-w-2xl">
        <span className="font-semibold text-blue-600 dark:text-blue-400">Full-Stack Developer</span> skilled in React, Node.js, and MongoDB—building seamless, scalable web apps from front to back.
      </p>
      <a
        href="#projects"
        className="inline-block bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-200 font-semibold mb-8"
      >
        View My Work
      </a>
    </div>
  );
};

export default Home; 