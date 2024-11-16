import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Ofline.css'; // Import CSS file

const Ofline = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/students')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    return (
<div>
<div className='dfgfd'>
           <center>
           
           
           <h2>Meeting Information</h2><br></br></center> 
           <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
                    <div style={{ width: "1000px", padding: "20px", border: "3px solid #00f", borderRadius: "5px" }}>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        <div className='u'> <center><h4>Meeting No: {student.id}</h4></center></div> 
                        
                        <center><strong>Details:</strong></center> <br></br><br></br><br></br>
                        <strong>Meeting Host:</strong> {student.name}<br />
                        <strong> Email:</strong> {student.email}<br />
                        <strong>Venue:</strong> {student.venue}<br />
                        <strong>Time:</strong> {student.time}<br />
                        <strong>Date:</strong> {student.date}<br />
                        <strong>Description:</strong> {student.description}<br />
                        <strong>Contect:</strong> {student.contact}<br />
                    </li>
                ))}
            </ul>
        </div>
        </div>
        
        

            </div>
        </div>
       
    );
};

export default Ofline;
