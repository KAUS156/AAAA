import React from "react";
import "./DT.css"; // Import your CSS file for styling

const DT = () => {
  return (
    <div className="dfghjkjhgf">
    <>
      <div className="containera">
        <h1 className="hh" >User Dasboad</h1>

        <div className="parta">
          <div className="card1a">
            <img src="/imglogo2.png" alt="" width={"50px"}/>
            <p className="card-texta">VOTE</p>
            <p>|</p>
            <p className="card-texta"> Vote</p>
          </div>
          <div className="card1a">
          <img src="/imglogo1.png" alt="" width={"50px"}/>
            <p className="card-texta">AWERNESS</p>
            <p>|</p>
            <p className="card-texta"> Workshop</p>
          </div>
          <div className="card1a">
          <img src="/imglogo4.png" alt="" width={"50px"}/>
            <p className="card-texta">DEMO</p>
            <p>|</p>
            <p className="card-texta">Video</p>
          </div>
        </div>

        <div className="cards-containera">
          <div className="cards-wrappera">

            <div className="carda">
              <h2>ELECTION</h2>
              <p>Vote</p>
            </div>
            <div className="carda">
              <h2>AWERNESS</h2>
              <p>Demo</p>
              <p>Post</p>
            </div>
            <div className="carda">
              <h2>Workshop</h2>
              <p>Online</p>
              <p>Ofline</p>
            </div>
           
            
            <div className="carda">
              <h2>Setting</h2>
              <p>UserSetting</p>
            </div>

          </div>
        </div>
      </div>
    </>
    </div>
  );
};

export default DT;