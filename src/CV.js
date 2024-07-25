import React from 'react';

const CV = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Luke Howlett</h1>
        <p className="text-lg text-gray-600">Data Analyst | GNSS Engineer | Expert in Satellite Navigation and Data Science</p>
        <div className="flex space-x-2 mt-2">
          <a href="#" className="text-blue-500 hover:text-blue-700">
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
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
