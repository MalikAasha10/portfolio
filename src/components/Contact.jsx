import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://wa.me/923117150010?text=${encodeURIComponent(
      `Name: ${name}\nMessage: ${message}`
    )}`;
    window.open(url, "_blank");
    setFeedback("WhatsApp opened! You can send your message now.");
    setTimeout(() => setFeedback(""), 4000);
  };

  return (
    <div className="max-w-xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400">Contact</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-400 transition"
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-400 transition"
        />
        <button
          type="submit"
          className="bg-blue-600 dark:bg-blue-700 text-white py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors font-semibold"
        >
          Send via WhatsApp
        </button>
        {feedback && (
          <div className="mt-2 text-green-600 dark:text-green-400 text-center animate-fade-in">
            {feedback}
          </div>
        )}
      </form>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <a
          href="https://www.linkedin.com/in/aashan-ashraf-143128368"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-700 dark:text-blue-400 hover:underline"
        >
          <FaLinkedin className="text-2xl" /> LinkedIn
        </a>
        <a
          href="https://github.com/MalikAasha10"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:underline"
        >
          <FaGithub className="text-2xl" /> GitHub
        </a>
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 text-green-700 dark:text-green-400 hover:underline"
        >
          <FaFileDownload className="text-2xl" /> Resume
        </a>
      </div>
    </div>
  );
};

export default Contact; 