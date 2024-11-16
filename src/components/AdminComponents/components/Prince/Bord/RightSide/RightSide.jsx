import React from "react";
import "./RightSide.css";

import MyCalendar from "./Calender/Calender";



const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
      
        <MyCalendar/>
       
      </div>
    </div>
  );
};

export default RightSide;