import React, { useState } from 'react';
import axios from 'axios';
import './Add.css'; // Import CSS file

const Add = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate that all required fields are filled
        if (!name || !email || !age || !gender || !number) {
            setMessage('Please fill in all required fields.');
            return;
        }
        axios.post(`http://localhost:8080/api`, { name, email,age,gender,number })
            .then(response => {
                console.log('Student created:', response.data);
                setMessage('Student successfully created.');
                // Reset form
                setName('');
                setEmail('');
                setAge('');
                setGender('');
                setNumber('');
                
                // Clear the success message after a few seconds
                setTimeout(() => setMessage(''), 3000);
            })
            .catch(error => console.error('Error creating student:', error));
    };

    return (
        <div className="update-student-container">
          
            {message && <p className="update-student-message">{message}</p>}
            <form onSubmit={handleSubmit}>
            <center>
            <h1>Add Candidate</h1>
                <input className="update-student-input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" /><br></br>
                <input className="update-student-input" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" /><br></br>
                <input className="update-student-input" type="text" value={age} onChange={e => setAge(e.target.value)} placeholder="Age" /><br></br>
                <input className="update-student-input" type="text" value={gender} onChange={e => setGender(e.target.value)} placeholder="Gender" /><br></br>
                <input className="update-student-input" type="text" value={number} onChange={e => setNumber(e.target.value)} placeholder="Number" />
               
               <center><button className="update-student-button" type="submit">Create</button></center> 
               </center>
            </form>
        </div>
    );
};

export default Add;
