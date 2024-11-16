import React, { useState } from 'react';
import axios from 'axios';
import './Delete.css'; // Import CSS file

const Delete = () => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8080/api/students/${id}`)
            .then(() => {
                console.log('Metting deleted:', id);
                setMessage('Metting successfully deleted.');
                // Reset form
                setId('');
                // Clear the success message after a few seconds
                setTimeout(() => setMessage(''), 3000);
            })
            .catch(error => {
                console.error('Error deleting student:', error);
                setMessage('Error deleting student. Please try again.');
            });
    };

    return (
        <div className="delete-student">
           <center></center> 
            {message && <p className="del">{message}</p>}
            <form className="delete-student-" onSubmit={handleSubmit}>
                <input className="delete-studentinput" type="text" value={id} onChange={e => setId(e.target.value)} placeholder="Metting No" />
                <button className="delete-studet-button" type="submit">Delete</button>
            </form>
        </div>
    );
};

export default Delete;
