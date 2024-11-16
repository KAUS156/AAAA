import React, { useState } from 'react';
import axios from 'axios';
 // Import the CSS file
 import './DeclearResult.css';
 import Navbar from "./Navbar";
function DeclearResult() {
    const [kaushal, setKaushal] = useState("");
    const [yasbant, setYasbant] = useState("");
    const [prince, setPrince] = useState("");
    // useEffect(() => {
    //     // Fetch count from backend when component mounts
    //     axios.get('http://localhost:8080/api/counter/a')
    //         .then(response => setCount(response.data))
    //         .catch(error => console.error('Error fetching count:', error));
    // }, []);

    const handleIncrease = () => {
        axios.get('http://localhost:8080/ap/a')
            .then(response => setKaushal(response.data))
            .catch(error => console.error('Error increasing count:', error));
    };
    const Increase = () => {
      axios.get('http://localhost:8080/ap/b')
          .then(response => setYasbant(response.data))
          .catch(error => console.error('Error increasing count:', error));
  };
  const handle = () => {
    axios.get('http://localhost:8080/ap/c')
        .then(response => setPrince(response.data))
        .catch(error => console.error('Error increasing count:', error));
};
const send = () => {
  
};

    return (
      <div className='d'>
      <div>
      <Navbar />
    
           
            <button className="ince-button" onClick={handleIncrease}>kaushal</button>
            <p ><h2> TotalVote of kaushal</h2>{kaushal}</p>
            <button className="inee-button" onClick={Increase}>yasbant</button>
            <p ><h2> TotalVote of Yasbant</h2>{yasbant}</p>
            <button className="increse-button" onClick={handle}>prince</button>
            <p ><h2> TotalVote of Prince</h2>{prince}</p>
            <center>
        <button className="incase-button" onClick={send}>Submit</button>
        </center>
        </div>
        </div>
        
    );
}
export default DeclearResult;