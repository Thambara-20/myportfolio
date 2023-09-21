import React, { useState } from 'react';
import Mobile from './Mobile';
import Web from './Web';
import './AboutmeMain.css';

const AboutMain = () => {
  const [activeTab, setActiveTab] = useState('mobile');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h2 className="a-title">My Projects</h2>
      <nav className="navbar">
        <ul className="navbar-nav">
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
        {activeTab && (
          <div className="bottom-line" style={{ left: activeTab === 'mobile' ? '10%' : '50%' }}></div>
        )}
      </nav>

      {activeTab === 'mobile' && <Mobile darkMode />}
      {activeTab === 'web' && <Web darkMode />}
    </div>
  );
};

export default AboutMain;
