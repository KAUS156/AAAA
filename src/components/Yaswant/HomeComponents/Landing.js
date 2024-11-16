import style from "./Home.module.css";


import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <div className="firsthome">
      

      <div id={style.div1}>
        <img src="https://imgs.search.brave.com/Zvn3pTnhrAGFSRzGPk-WV_S81baE7V2vrLVAd3CQZig/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzg3LzkwLzc2/LzM2MF9GXzU4Nzkw/NzYyN181ZkRCak1v/SXMzS1k3Zlc3YlpJ/NWx5eVh2Umt2NGRE/ci5qcGc"
         alt="voting image" />
        <span>Online Voting System</span>
      </div>

      <div id={style.div2}>
        <div className={style.div3}>
          <NavLink exact to="/userlogin">
            <img
              src="https://imgs.search.brave.com/ww5k7GZKu3CaMGwAsbPlFlyM7ogaHe2ZnHdOvxrz9kE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk4LzcyLzQz/LzM2MF9GXzQ5ODcy/NDMyM19Gb25BeThM/WVlmRDFCVUMwYmNL/NTZhb1l3dUxISjJH/ZS5qcGc"
              alt="user icon"
              
            />
            <span>User Login</span>
            
          </NavLink>
        </div>

        <div className={style.div3}>
          <NavLink to="/adminLogin">
            <img
              src="https://imgs.search.brave.com/nPtNi4Olg1cp2V8Ee_02a6LyBlD0__vHbw9HF_5zL48/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzQ5LzAwLzY3/LzM2MF9GXzI0OTAw/NjcxNl9UWWhVUmxw/M2xmTlB6QWo1bml5/WXB1eUNUR2w2MFpw/Si5qcGc"
              alt="admin icon"
            />
            <span>Admin Login</span>
           
            
          </NavLink>
        </div>
      </div>
      
    </div>
  );
}

export default Landing;
