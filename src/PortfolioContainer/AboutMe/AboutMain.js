import React, { useState } from 'react';
import Mobile from './Mobile';
import Web from './Web';
import './AboutmeMain.css';
import ImageList from '../../test';
const AboutMain = () => {
  const [activeTab, setActiveTab] = useState('all'); // Set the default active tab to 'all'

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div data-aos='fade-up'>
      <h2 className="a-title">My Projects</h2>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li
            className={`nav-item ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => handleTabChange('all')}
          >
            All
          </li>
          <li
            className={`nav-item ${activeTab === 'mobile' ? 'active' : ''}`}
            onClick={() => handleTabChange('mobile')}
          >
            Mobile
          </li>
          <li
            className={`nav-item ${activeTab === 'web' ? 'active' : ''}`}
            onClick={() => handleTabChange('web')}
          >
            Web
          </li>
        </ul>
       
      </nav>

      {activeTab === 'all' && (
        <div>
          <Mobile darkMode />
          <Web darkMode />
          
          {/* Add other project components here if needed */}
        </div>
      )}
      {activeTab === 'mobile' && <Mobile darkMode />}
      {activeTab === 'web' && <Web darkMode />}
    </div>
  );
};

export default AboutMain;
