import React, { useState } from 'react';
import './UserLogin.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../Sidebar';


const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password
      });
      console.log(response.data);
      alert('Login successful!');
      // Redirect or do something else after successful login
      navigate("/Sidebar"); // Assuming this redirects to the dashboard page
    } catch (error) {
      console.error(error);
      alert('Login failed!');
    }
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>

        <div>
          <Link to="/userRegister">Create an account</Link>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
