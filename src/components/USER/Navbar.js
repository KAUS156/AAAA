import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  
  function logout(){
    sessionStorage.clear();
  }

  return (
    <div>
      <h1><center>ELECTION</center></h1>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand fw-bolder fst-italic fs-4">
            <span className='text-danger'></span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> 
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/home" className="nav-link">
              <big><b>Home</b></big>
              </Link>
              <Link to="/Vote" className="nav-link">
                <big><b>Vote</b></big>
              </Link>



              <Link to="/ViewResult" className="nav-link">
              <big><b>ViewResult</b></big>
              </Link>
              <Link to="/TotalVote" className="nav-link">
              <big><b>TotalVote</b></big>
              </Link>
              
              <Link to="/" className="nav-link" onClick={logout}>
              <big><b>   Logout    </b></big>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
