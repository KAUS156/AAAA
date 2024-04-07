// Settings.js

import React, { useState } from 'react';
import './Settings.css'; // Import the CSS file
import Account from './Account';
import HelpandSupport from './HelpandSupport';
import EditPassword from './EditPasswords';
import ContactForm from './ContactForm';
// import Privacy from './Privacy';
// import Notification from './Notification'


const Settings = () => {
  const [activeTab, setActiveTab] = useState('Account'); // State to track active tab

  // Function to handle tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Dummy content for different tabs
  const tabContent = {
  
    Account: (
      
      <div>
      
        <Account/>
      </div>
    ),
    // Privacy: (
    //   <div>
    //   <Privacy />
    //   </div>
    // ),
    // Notifications: (
    //   <div>
    //     <Notification />
    //   </div>
    // ),
    "Edit Password": (
      <div >
      <EditPassword /> 
        
      </div>
    ),

    "Contact Us": (
      <div>
        <ContactForm/>
      </div>
    ),
    "Help and Support": (
      <div>
          <HelpandSupport/>
      </div>
    )

  };

  return (
    <div className="settings-container">
      <div className="settings-nav">
        {/* Left side navigation */}
        <ul>
          {Object.keys(tabContent).map((tabName) => (
            <li
              key={tabName}
              className={activeTab === tabName ? 'active' : ''}
              onClick={() => handleTabClick(tabName)}
            >
              {tabName}
            </li>
          ))}
        </ul>
      </div>
      <div className="settings-content">
        {/* Right side content based on active tab */}
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default Settings;
