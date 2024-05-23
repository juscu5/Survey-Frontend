import React from "react";
import './DivWave.scss';

const DivWave = () => {
  return (
    <div className="waveDiv" id="survey">
      <svg
        viewBox="0 -20 700 110"
        width="100%"
        height="220"
        preserveAspectRatio="none"
      >
        <path
          transform="translate(0, -20)"
          d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700"
          fill="#7a0096"
        />
        <path
          d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v30 h-700z"
          fill="#f9f9f9"
        />
      </svg>
    </div>
  );
};

export default DivWave;
