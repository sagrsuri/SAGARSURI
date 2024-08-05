import React from 'react';
import projectsData from './projectsData';

const Project = () => {
  return (
    <section id="Project" className="project  bg-slate-200 w-full h-full dark:bg-slate-900 py-16 ">
      <div className="project-wrapper max-w-7xl mx-auto px-4">
        <div className="heading text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Projects</h2>
        </div>
        <div className="grid grid-cols-1 pt-16 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="project-box bg-slate-100 dark:bg-slate-950 shadow-lg rounded-lg p-4 transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="project-flex flex-col items-center">
                <h1 className="bg-[#ff9524] dark:bg-blue-700 text-white text-lg font-semibold py-1 px-3 rounded w-full text-center">
                  {project.title}
                </h1>
                <img
                  className="dark:border border-black dark:border-green-400 border-[1px] w-full h-48 object-cover mt-2 rounded-[3px]"
                  src={project.image}
                  alt={project.title}
                />
                {/* <video className="dark:border border-black dark:border-green-400 border-[1px] w-full h-48 object-cover mt-2 rounded-[3px]"
                src={project.video}
                poster={project.thumbnail}
                controls
                muted
                alt={project.title}
                /> */}
                <div className="anchor mt-3 flex justify-center gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition"
                  >
                    <i className="fa-solid fa-paperclip text-xl"></i>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-white hover:text-black transition"
                  >
                    <i className="fa-brands fa-github text-xl"></i>
                  </a>
                </div>
                <p className="mt-3 flex flex-wrap justify-center gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-300 dark:bg-gray-700 text-sm px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
