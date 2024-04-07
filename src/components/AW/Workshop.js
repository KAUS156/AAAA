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
 <h2>Ofline Metting</h2>
 <h2>Online Metting</h2>
 </div>
 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link to="/ofline">
      <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => console.log('Left Button clicked')}>join metting</button>
      </Link>
      <Link to="/online">
      <div className="o">
      <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => console.log('Right Button clicked')}>Join metting</button>
    </div>
     
      </Link>
      
    </div>
    </div>
  );

  }
export default Workshop;
