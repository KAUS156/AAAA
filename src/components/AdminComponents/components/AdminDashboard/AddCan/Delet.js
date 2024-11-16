import React, { useState } from 'react';
import axios from 'axios';
import './Delet.css'; // Import CSS file

const Delet = () => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8080/api/${id}`)
            .then(() => {
                console.log('Student deleted:', id);
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
        <div className="delete">
           <center></center> 
            {message && <p className="delete-student-message">{message}</p>}
            <form className="delete-student-form" onSubmit={handleSubmit}>
                <input className="delete-student-input" type="text" value={id} onChange={e => setId(e.target.value)} placeholder="Candidate No" />
                <button className="delete-student-button" type="submit">Delete</button>
            </form>
        </div>
    );
};

export default Delet;
