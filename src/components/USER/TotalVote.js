import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";
import './TotalVote.css'
function TotalVote() {
    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false); // State to track if the button is clicked

    useEffect(() => {
        // Fetch count from backend when component mounts
        axios.get('http://localhost:8080/api/counter/a')
            .then(response => setCount(response.data))
            .catch(error => console.error('Error fetching count:', error));
    }, []);

    const handleIncrease = () => {
        axios.put('http://localhost:8080/api/counter/a')
            .then(response => {
                setCount(response.data);
                setClicked(true); // Set clicked to true when the button is clicked
            })
            .catch(error => console.error('Error increasing count:', error));
    };

    return (
        <div>
        <div className='dfghgh'>
            <Navbar />
            <center>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
                    <div style={{ width: "700px", padding: "20px", border: "3px solid #00f", borderRadius: "5px" }}>
                        <button className="increase-button" onClick={handleIncrease}>TotalVote</button>
                        <p><h2> Total Vote</h2>{clicked ? count : 0}</p>
                    </div>
                </div>
            </center>
        </div>
        </div>
    );
}

export default TotalVote;
