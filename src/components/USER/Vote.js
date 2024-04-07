import React from 'react'

import Navbar from "./Navbar";
import './Vote.css';
import axios from 'axios';
import { useState } from 'react';


export default function Vote() {

  
  
    const [email, setEmail] = useState("");
    const [candidate1, setCandidate1] = useState("");
    const [candidate2, setCandidate2] = useState("");
    const [candidate3, setCandidate3] = useState("");
    
    
    const [kaushal, setKaushal] = useState("");
    const [yasbant, setYasbant] = useState("");
    const [prince, setPrince] = useState("");
    
    const handleIncrease = () => {
      axios.put('http://localhost:8080/api/a')
          .then(response => setKaushal(response.data))
          .catch(error => console.error('Error increasing count:', error));
  };
 
  
    
  const Increase = () => {
    axios.put('http://localhost:8080/api/b')
        .then(response => setYasbant(response.data))
        .catch(error => console.error('Error increasing count:', error));
};

    
const handle = () => {
  axios.put('http://localhost:8080/api/c')
      .then(response => setPrince(response.data))
      .catch(error => console.error('Error increasing count:', error));
};


    // async function save(event) {
    //     event.preventDefault();

        async function save(event) {
          event.preventDefault();
          // Stop further execution
          
          if (!email) {
              alert('Please provide your email address.');
              return; // Stop further execution
          }
          
        
        try {
            await axios.post("http://localhost:8080/api/users/signup", {
                
                
               
                email: email,
                
                candidate1:candidate1,
                candidate2: candidate2,
                candidate3:candidate3,
              
                
            });
            
      alert('Vote successful!');
      // Redirect or do something else after successful registration
       // Assuming this redirects to the homepage
    } catch (error) {
      console.error(error);
      alert('You are already voted');
    }
  };



    return (
        <div className='mainvote'>
             <Navbar />
             <center>
             
             <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
  <div style={{ width: "500px", padding: "20px", border: "3px solid #00f", borderRadius: "5px" }}>
  <h1> Do Vote </h1>
    <center>
      <div className="v">
        
      </div>
    </center>

    <form>
      
    
      <div className="form-floating mb-3">
        EMAIL
        <input 
          type="email" 
          id="email" 
          placeholder="Email address" 
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>

      <div className="form-check">
        <div className="k"><div className="b"></div></div> KAUSHAL KUMAR 
        <input 
          className="form-check-input" 
          type="radio" 
          name="exampleRadios" 
          id="exampleRadios2" 
          value="kaushal"
          checked={candidate1 === "kaushal"}
          onChange={(event) => {
            setCandidate1(event.target.value);
          }}
        />
       
      </div> 

      <div className="form-check">
        <div className="y"></div> YASBANT KUMAR 
        <input 
          className="form-check-input" 
          type="radio" 
          name="exampleRadios" 
          id="exampleRadios2" 
          value="yasbant"
          checked={candidate2 === "yasbant"}
          onChange={(event) => {
            setCandidate2(event.target.value);
          }}
        />
      </div> 

      <div className="form-check">
        <div className="p"></div> PRINCE KUMAR 
        <input 
          className="form-check-input" 
          type="radio" 
          name="exampleRadios" 
          id="exampleRadios2" 
          value="prince"
          checked={candidate3 === "prince"}
          onChange={(event) => {
            setCandidate3(event.target.value);
          }}
        />
      </div> 

      <button type="submit" className="btn btn-primary form-control btn-block mb-4" onClick={save}>Submit</button>
    </form>
  </div>
</div>
</center>
        </div >
        
    )
}


