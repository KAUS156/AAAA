import React from "react";
import Navbar from "./Navbar";
import './Workshop.css';
import { Link } from 'react-router-dom';
function Workshop() {
  
  

  return (
    <div className='mainvo'>
    
    <Navbar />
    
    
     <center><h1>Welcome Join Workshop</h1></center> 
     <div className="j"></div>
     <div style={{ display: 'flex', justifyContent: 'space-between' }}> 
 <h2>Ofline Workshop</h2>
 <h2>Online Workshop</h2>
 </div>
 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link to="/ofline">
      <button style={{ backgroundColor: 'blue', color: 'white', width: '250px', height: '60px', fontSize: '20px' }} onClick={() => console.log('Left Button clicked')}>Join </button>

      </Link>
      <Link to="/online">
      <div className="o">
      <button style={{ backgroundColor: 'blue', color: 'white', width: '250px', height: '60px', fontSize: '20px' }} onClick={() => console.log('Left Button clicked')}>Join </button>

    </div>
     
      </Link>
      
    </div>
    </div>
  );

  }
export default Workshop;
