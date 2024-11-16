import React from 'react';
import { Link } from 'react-router-dom'; // Import Link and useLocation


function Navbar() {


  function logout(){
    sessionStorage.clear();
  }

  return (<div className='e'>
    <div><h1><center>Awerness</center></h1>
    </div>
    <div style={{ border: '5px solid black', height: '160px',padding: '-2px' }}>
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
            <span className="navbar-ton"></span>
          </button> 
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <Link to="/Home1" className="nav-link">
              <big><b>Home</b></big>
              </Link>
             <Link to="/Demo" className="nav-link">
              <big><b>Demo</b></big>
              </Link>
              <Link to="/Post" className="nav-link">
              <big><b>Post</b></big>
              </Link>

              <Link to="/Workshop" className="nav-link">
              <big><b>Workshop</b></big>
              </Link>

              {/* <li className ="lag">
                <Link to="/Logout" className="nav">
                <h2>Logout</h2>
                </Link>
              </li> */}
              <Link to="/" className="nav-link" onClick={logout}>
              <big><b>   Logout    </b></big>
              </Link>
            </ul>
            
            <form className="d-flex">
            
             
              
              
              
            </form>
          </div>
        </div>
      </nav>
    </div>
    </div>
  );
}

export default Navbar;
