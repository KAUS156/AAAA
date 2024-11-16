import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './View.css'; // Import CSS file

const View = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    return (
        <div className="info">
         
            <ul>
            <center></center>
                {students.map(student => (
            
                <li key={student.id}> <br></br>  
                     <div className='u'> <h2>Candidate No: {student.id}</h2><br /></div> <br></br><br></br>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "49vh" }}>
  <div style={{ width: "700px", padding: "20px", border: "3px solid #00f", borderRadius: "5px" }}><div></div>
  <center><h2>Candidate Information</h2><br></br></center> 
 <center><strong> Candidate Details:</strong><br /></center> <br></br>
                        <strong>Name:</strong> {student.name}<br />
                        <strong>Email:</strong> {student.email}<br />
                        <strong>Gender:</strong> {student.gender}<br />
                        <strong>Age:</strong> {student.age}<br />
                        <strong>Number:</strong> {student.number}<br />
                        
                        </div>

        </div>
                    </li>
                ))}
            </ul>
        </div>
        
    );
};

export default View;
