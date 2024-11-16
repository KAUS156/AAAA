import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";
// Import CSS file
import './ViewResult.css';
const ViewResult = () => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/ap/results')
            .then(response => {
                setResult(response.data);
            })
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    return (
        
        <div className='maote'>
            <Navbar />
        
        
          <center><h2>Result</h2><br></br></center>  
            <ul>
            <center></center>
                {result.map(result => (
            
                <li key={result.id}> <br></br>  
                      <br /><br></br><br></br>
                     
 <center><strong> Result</strong><br /></center> <br></br>
               <center> <strong>Kaushal Has Achive TotalVote:</strong> {result.kaushal}<br />
                        <strong>Yasbant Has Achive TotalVote:</strong> {result.yasbant} Winner<br />
                        <strong>Prince Has Achive TotalVote:</strong> {result.prince}<br /></center> 
                        
                        
                        

        
                    </li>
                ))}
            </ul>
        </div>
        
        
    );
};

export default ViewResult;
