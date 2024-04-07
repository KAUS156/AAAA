// ContactForm.js

import React, { useState } from 'react';
import './Contact.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log(formData); // You can replace this with your submission logic
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className='contact-form-container'>
      <h3 className='contact-form-heading'>Contact Us</h3>
      <form onSubmit={handleSubmit} className='contact-form'>
        <div className='form-group'>
          <label htmlFor="name" className='form-label'>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className='form-input'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="email" className='form-label'>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='form-input'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="subject" className='form-label'>Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className='form-input'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="message" className='form-label'>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className='form-textarea'
            required
          ></textarea>
        </div>
        <button type="submit" className='submit-button'>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
