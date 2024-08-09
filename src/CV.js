import React, { useState } from 'react';
import Modal from './components/Modal';

const CV = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skillCategories = {
    "Core Competencies": ["Data Engineering", "Data Analysis", "Data Science", "Data Visualisation", "Interactive Dashboards"],
    "Development Tools": ["Python", "SQL", "Docker", "Linux", "AWS/ GCP"],
    "Domain Knowledge": ["Mathematics (BSc.)", "Statistics",  "GNSS/ PNT", "Data Streaming and IoT", "Chat GPT"],
    "Soft Skills": ["Project Management", "System Deployment", "Team Collaboration", "Problem Solving", "Leadership"],
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      <button
        className="absolute top-6 right-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={openModal}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        About This CV
      </button>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <div className="max-w-2xl mx-auto p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Info</h2>
          <div className="text-gray-700 space-y-4 mb-6">
            <p>
              This interactive CV is built using modern web technologies, showcasing not just my professional experience, but also my ability to adapt and learn new skills:
            </p>
            <ul className="grid grid-cols-2 gap-2 pl-4">
              <li>React</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Tailwind CSS</li>
              <li>Github Pages</li>
            </ul>
            <p>
              While I'm not primarily a frontend developer, this project demonstrates my resourcefulness and ability to quickly learn and apply new technologies. It showcases my approach to problem-solving: identifying the tools needed, learning them efficiently, and implementing a solution effectively.
            </p>
            <p>
              This adaptability and "get things done" attitude are key strengths I bring to any project or team, complementing my core skills in data analysis and GNSS engineering.
            </p>
          </div>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </Modal>

      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Luke Howlett</h1>
        <p className="text-lg text-gray-600">Data Analyst | GNSS Engineer | Expert in Satellite Navigation and Data Science</p>
        <div className="flex space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/luke-howlett97" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
          </a>
          <a href="https://github.com/lukechc" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
          </a>
          <a href="mailto:lukehowlett97@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>
          </a>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Professional Summary</h2>
        <p className="text-gray-700">
          Data Analyst specializing in GNSS and mathematical modeling, I excel at converting complex data into actionable insights. Highly skilled in Python, I leverage its' powerful libraries to analyse, visualise, and interpret large datasets. I am driven by a problem-solving mindset and strong analytical skills to support data-driven decision-making and strategy development.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Current Job</h2>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <h3 className="text-xl font-semibold text-gray-700">CHC Tech LTD</h3>
                <a href="https://ichcgnss.co.uk/" className="text-xl font-semibold text-blue-700 hover:underline">Link</a>
              </div>
              <p className="text-gray-600 italic">2020 - Present</p>
            </div>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li><strong>Lead Member of a small R&D Team:</strong> Took charge of a multitude of diverse tasks within a small R&D team, demonstrating exceptional flexibility and resourcefulness to achieve and surpass objectives.</li>
              <li><strong>Data Engineering and System Deployment:</strong> Designed, built, automated and deployed sophisticated data pipelines and systems, significantly improving efficiency and optimizing processes.</li>
              <li><strong>Comprehensive Data and Scientific Analysis:</strong> Utilized statistical analysis and machine learning techniques to model and interpret GNSS data. Proficient in applying linear algebra and coordinate transformations to understand satellite dynamics.</li>
              <li><strong>Research Implementation and Innovation:</strong> Translated cutting-edge techniques from research papers into functional code, bridging the gap between theoretical research and practical application to drive innovation.</li>
              <li><strong>A Great Team Member:</strong> Collaborated with prestigious organizations such as NASA, IGS, and Imperial College, contributing to significant projects and research initiatives. Participated in European business trips, networked at industry conventions, and engaged in critical collaborative meetings with key companies in the field.</li>
            </ul>
          </div>
    </section>


      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-2">{category}</h3>
              <ul className="list-none space-y-2">
                {skills.map((skill, index) => (
                  <li key={index} className="text-sm text-gray-600 hover:text-gray-800">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">About Me</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Voted the happiest and most charming member of the office.</li>
          <li>Dedicated to continuous learning and professional development.</li>
          <li>Passionate about emerging technologies and their applications.</li>
          <li>Eager to create a positive global impact through my work.</li>
          <li>An engineer at heart, taking a systematic approach to everyday life.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="https://example.com/satellite-tracker" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Real-Time Satellite Tracker</h3>
            <p className="text-gray-700 mb-2">GIS tool to visualise live satellite positions and ground reference stations.</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Work Project</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Pandas</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Streamlit</span>
            </div>
          </a>
          <a href="https://example.com/sv-elevation-calculator" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">SV Elevation Calculator</h3>
            <p className="text-gray-700 mb-2">Open source tool I optimised to calculate satellite elevation and azimuth.</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Work Project</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Numpy</span>
            </div>
          </a>
          <a href="https://example.com/group-chat-dashboard" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Group Chat Dashboard</h3>
            <p className="text-gray-700 mb-2">Webapp showcasing visualisations and insights into my friend's groupchat, deployed on docker.</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Personal Project</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Python</span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CV;
