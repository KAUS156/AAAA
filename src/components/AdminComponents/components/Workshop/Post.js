import React, { useState } from 'react';
import axios from 'axios';
import './Post.css'; // Import CSS file

const Post = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [venue, setVenue] = useState('');
    const [contact, setContact] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate that all required fields are filled
        if (!name || !email || !venue || !time || !date ||!contact) {
            setMessage('Please fill in all required fields.');
            return;
        }
        axios.post(`http://localhost:8080/api/students`, { name, email,venue,time,date,description,contact })
            .then(response => {
                console.log('Metting created:', response.data);
                setMessage('Metting successfully created.');
                // Reset form
                setName('');
                setEmail('');
                setVenue('');
                setTime('');
                setDate('');
                setContact('');
                setDescription('');
                // Clear the success message after a few seconds
                setTimeout(() => setMessage(''), 3000);
            })
            .catch(error => console.error('Error creating student:', error));
    };

    return (
        <div className="update-student-container">
          <center><h2>Create Metting</h2></center> 
            {message && <p className="update-student">{message}</p>}
            <form onSubmit={handleSubmit}>
                <input className="update-student-input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
                <input className="update-student-input" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input className="update-student-input" type="text" value={venue} onChange={e => setVenue(e.target.value)} placeholder="Venue" />
                <input className="update-student-input" type="text" value={time} onChange={e => setTime(e.target.value)} placeholder="Time" />
                <input className="update-student-input" type="text" value={date} onChange={e => setDate(e.target.value)} placeholder="Date" />
                <input className="update-student-input" type="text" value={contact} onChange={e => setContact(e.target.value)} placeholder="Contact" />
                <input className="update-student-input" type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
               <center><button className="update" type="submit">Create</button></center> 
            </form>
        </div>
    );
};

export default Post;
