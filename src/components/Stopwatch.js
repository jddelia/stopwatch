import React from 'react';

const Stopwatch = (props) => {
  return (
    <div className="stopwatch-container">
      <div className="stopwatch-display">
        <div className="time-block">
          <h4>{props.status.min2}</h4>
        </div>

        <div className="time-block">
          <h4>{props.status.min1}</h4>
        </div>

        <div className="colon-container">
          <div className="colon-1"></div>
          <div className="colon-2"></div>
        </div>

        <div className="time-block">
          <h4>{props.status.sec2}</h4>
        </div>

        <div className="time-block">
          <h4>{props.status.sec1}</h4>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
