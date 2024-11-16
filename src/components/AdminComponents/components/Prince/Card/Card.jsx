import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.css';
import SmartWatch from '../SmartWatch/SmartWatch';

const Card = () => {
  // State to hold the total vote
  const [totalVote, setTotalVote] = useState(null);

  // Function to fetch total vote from the database
  const fetchTotalVote = async () => {
    try {
      const response = await axios.get('YOUR_API_ENDPOINT'); // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      setTotalVote(response.data.totalVote); // Assuming 'totalVote' is the field containing the total vote in the response data
    } catch (error) {
      console.error('Error fetching total vote:', error);
    }
  };

  // Fetch total vote when the component mounts
  useEffect(() => {
    fetchTotalVote();
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div className='main'>
      <h1>Voting</h1>
      <div className="analyse">
        <div className="voter">
          <div className="status">
            <div className="info">
              <h3>Total Voter</h3>
              <h1>{totalVote}</h1>
            </div>
            {/* Progress SVG and percentage */}
          </div>
        </div>
        {/* Other elements */}
        <SmartWatch />
      </div>
    </div>
  );
};

export default Card;
