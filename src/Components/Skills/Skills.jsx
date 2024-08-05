import React from 'react';
import skillsData from './skillsData';

const Skills = () => {
  return (
    <section id='Skills' className="bg-slate-200 w-full h-full dark:bg-slate-900 py-16">
      <div className="skills-wrapper max-w-4xl mx-auto px-4">
        <h1 className="text-center text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200 pb-10">Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-box bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">{skill.name}</h2>
              <div className="relative w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 dark:from-blue-700 dark:via-blue-800 dark:to-blue-900 h-4 rounded-full transition-all duration-500"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
