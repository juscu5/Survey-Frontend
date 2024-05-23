import React from "react";
import "./StepProgress.scss";

const StepProgress = (props) => {
  return (
    <div className="progressbar-wrapper">
      <ul className="progressbar">
        <li className={props.progressStatus >= 0 ? "active" : ""}>
          <div className="titleFont">Leadership <br /> Management</div>
        </li>
        <li className={props.progressStatus >= 1 ? "active" : ""}>
          <div className="titleFont">Client <br /> Related</div>
        </li>
        <li className={props.progressStatus >= 2 ? "active" : ""}>
          <div className="titleFont">Company <br /> Related</div>
        </li>
        <li className={props.progressStatus >= 3 ? "active" : ""}>
          <div className="titleFont">Personal<br /> Related</div>
        </li>
        <li className={props.progressStatus >= 4 ? "active" : ""}>
          <div className="titleFont">Wellness</div>
        </li>
        <li className={props.progressStatus >= 5 ? "active" : ""}>
          <div className="titleFont">Feedback!</div>
        </li>
        <li className={props.progressStatus >= 6 ? "active" : ""}>
          <div className="titleFont">Done!</div>
        </li>
      </ul>
    </div>
  );
};

export default StepProgress;
