import React, { useState, useEffect } from 'react';
import './SmartWatch.css';

const SmartWatch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="smartwatch">
      <div className="watch">
        <div className="screen">
          <div className="time">{time.toLocaleTimeString()}</div>
          <div className="date">{time.toDateString()}</div>
        </div>
      </div>
    </div>
  );
};

export default SmartWatch;
