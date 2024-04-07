import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";
// Import CSS file

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
        <div>
            <Navbar />
        
        <div className="info">
          <center><h2>Result</h2><br></br></center>  
            <ul>
            <center></center>
                {result.map(result => (
            
                <li key={result.id}> <br></br>  
                     <div className='u'> <br /></div> <br></br><br></br>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "20vh" }}>
  <div style={{ width: "700px", padding: "20px", border: "3px solid #00f", borderRadius: "5px" }}><div></div>
 <center><strong> Result</strong><br /></center> <br></br>
                        <strong>Kaushal Has Achive TotalVote:</strong> {result.kaushal}<br />
                        <strong>Yasbant Has Achive TotalVote:</strong> {result.yasbant} Winner<br />
                        <strong>Prince Has Achive TotalVote:</strong> {result.prince}<br />
                        
                        
                        </div>

        </div>
                    </li>
                ))}
            </ul>
        </div>
        </div>
        
    );
};

export default ViewResult;
