import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './View.css'; // Import CSS file

const View = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/students')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    return (
        <div className="meet">
            <h2>Meeting Information</h2><br></br>
            <ul>
                {students.map(student => (
                    <li key={student.id}><br></br>
                      <div className='ygf'> <h2>Meeting No: {student.id}</h2><br /></div> <br></br>
                     
 <center><strong>Details:</strong><br /></center> <br></br>
                        <strong>Meeting Conduct:</strong> {student.name}<br />
                        <strong>Host Email:</strong> {student.email}<br />
                        <strong>Venue:</strong> {student.venue}<br />
                        <strong>Time:</strong> {student.time}<br />
                        <strong>Date:</strong> {student.date}<br />
                        <strong>Description:</strong> {student.description}<br />
                        <strong>Contact:</strong> {student.contact}<br />
                        

        
                    </li>
                ))}
            </ul>
        </div>
        
    );
};

export default View;
