import React from "react";
import Navbar from "../AdminWorkshop/Navbar";
import './Workshop1.css';
import { Link } from 'react-router-dom';
function Workshop1() {
  
  

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
      <Link to="/AdminOflineMetting">
      <button style={{ padding: '15px 44px', fontSize: '25px', marginRight: '44px' }}>Join</button>
      </Link>
      {/* <Link to="/online">
      <div className="o">
      <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => console.log('Right Button clicked')}>Join metting</button>
    </div>
     
      </Link> */}
      <div className="olt">
  <a href="https://adminworkshop.netlify.app" target="_blank" rel="noopener noreferrer">
    <button style={{ padding: '15px 44px', fontSize: '25px', marginRight: '44px' }}>Join</button>
  </a>
</div>

      
      </div>
    
    </div>
  );

  }
export default Workshop1;
