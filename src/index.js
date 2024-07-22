import React from 'react';

const CV = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Luke Howlett</h1>
        <p className="text-lg text-gray-600">Data Analyst | GNSS Engineer | Expert in Satellite Navigation and Data Science</p>
        <div className="flex space-x-4 mt-2">
          <a href="https://github.com/your-username" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/your-username" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Professional Summary</h2>
        <p className="text-gray-700">
          As a Data Analyst with expertise in GNSS and mathematical modeling, I excel at converting complex data into actionable insights. Proficient in Python, I leverage powerful libraries to analyze, visualize, and interpret large datasets. I am driven by a problem-solving mindset and strong analytical skills to support data-driven decision-making and strategy development.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Current Job</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">GNC Nav</h3>
          <p className="text-gray-600 italic">2020 - Present</p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Lead Member of a small R&D Team: Responsible for a variety of tasks, demonstrating flexibility and efficiency in achieving objectives.</li>
            <li>Data Engineering and System Deployment: Designed, built, automated and deployed sophisticated data pipelines and systems, significantly improving efficiency and optimizing processes.</li>
            <li>Comprehensive Data and Scientific Analysis: Utilized statistical analysis and machine learning techniques to model and interpret GNSS data. Proficient in applying linear algebra and coordinate transformations to understand satellite dynamics.</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Technical Skills</h2>
        <div className="flex flex-wrap gap-2">
          {['Python', 'Mathematics (BSc.)', 'Data Engineering', 'Data Analysis', 'Data Science', 'Data Visualisation', 'Machine Learning', 'Statistics', 'Cloud Platforms', 'Web Development', 'Project Management', 'System Deployment', 'Version Control', 'Mathematical Modelling', 'Data Modelling', 'SQL', 'Docker', 'GIS'].map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">About Me</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Energetic and optimistic, always seeking new career challenges.</li>
          <li>Dedicated to continuous learning and professional development.</li>
          <li>Passionate about emerging technologies and their applications.</li>
          <li>Eager to create a positive global impact through my work.</li>
          <li>Effective collaborator and team leader, thriving in diverse environments.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Real-Time Satellite Tracker</h3>
            <p className="text-gray-700 mb-2">GIS tool to visualise live satellite positions and ground reference stations.</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Work Project</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Pandas</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Streamlit</span>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">SV Elevation Calculator</h3>
            <p className="text-gray-700 mb-2">Open source tool I optimised to calculate satellite elevation and azimuth.</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Work Project</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Numpy</span>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Group Chat Dashboard</h3>
            <p className="text-gray-700 mb-2">Webapp showcasing visualisations and insights into my friend's groupchat, deployed on docker.</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Personal Project</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Python</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;
