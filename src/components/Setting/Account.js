import React, { useState } from 'react';
import './Account.css';
import aashna from './photo/Aashna.png'

const Account = () => {
  const [editing, setEditing] = useState(false);
  const [showChangePhoto, setShowChangePhoto] = useState(false); // New state to control the visibility of the change photo button
  const [userData, setUserData] = useState({
    name: 'Aashna Raj',
    email: '210101120222@cutm.ac.in',
    phoneNumber: '+916200768221',
    photo: '', // Store the photo URL here
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditProfile = () => {
    setEditing(true);
    setShowChangePhoto(true); // Show the change photo button when editing profile
  };

  const handleSaveProfile = () => {
    // Add logic to save updated profile
    setEditing(false);
    setShowChangePhoto(false); // Hide the change photo button after saving profile
  };

  const handlePhotoChange = (e) => {
    // Handle photo change and update userData
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserData((prevData) => ({
        ...prevData,
        photo: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="account-container">
      <div className="profile-photo-container">
        {editing ? (
          <>
            <input
              type="file"
              accept="image/*"
              name="photo"
              onChange={handlePhotoChange}
            />
            <img src={aashna} alt="Profile" className='profile-photo' />
            {/* <img
              src={userData.photo || './photo/Aashna.png'}
              alt="Profile"
              className="profile-photo"
            /> */}
          </>
        ) : (
          <img src={aashna}  alt="Profile" className='profile-photo' />
          
          // <img
          //   src={userData.photo || './photo/Aashna.png'}
          //   alt="Profile"
          //   className="profile-photo"
          // />
        )}
        {showChangePhoto && (
          <button onClick={() => document.querySelector('input[type="file"]').click()}>
            Change Photo
          </button>
        )}
      </div>
      <h2>Account Information</h2>
      <div>
        <label>Name:</label>
        {editing ? (
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
        ) : (
          <span>{userData.name}</span>
        )}
      </div>
      <div>
        <label>Email:</label>
        {editing ? (
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        ) : (
          <span>{userData.email}</span>
        )}
      </div>
      <div>
        <label>Phone Number:</label>
        {editing ? (
          <input
            type="tel"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleInputChange}
          />
        ) : (
          <span>{userData.phoneNumber}</span>
        )}
      </div>
      {editing ? (
        <button onClick={handleSaveProfile}>Save</button>
      ) : (
        <button onClick={handleEditProfile}>Edit Profile</button>
      )}
    </div>
  );
};

export default Account;
