import React from "react";
import './ProgressBar.scss';
import { useSelector } from "react-redux";

const ProgressBar = (props) => {
    
  const message = useSelector((state) => state.progressBarReducer.progress);

  return (
    <div className="progressBar">
      <div className="columns">
        <div className="column">
          <h2 class="subtitle is-title">{ 
                props.page === 0 ? "Leader/Manage" :
                props.page === 1 ? "Client Related" : 
                props.page === 2 ? "Company Related" :
                props.page === 3 ? "Personal Related" :
                props.page === 4 ? "Wellness" : NaN
          }</h2>
        </div>
        <div className="column is-10 is-progress">
          <progress class="progress is-tp" value={message} max="100"></progress>
        </div>
        <div className="column is-narrow">
        <h2 class="subtitle">{message}%</h2>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
