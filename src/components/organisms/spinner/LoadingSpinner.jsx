import React from "react";
import { TailSpin } from  'react-loader-spinner';
import './LoadingSpinner.scss'

const LoadingSpinner = () => {
  return (
    <div className="loadingSpinner">
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <div className="columns is-centered">
                    <div className="column"></div>
                    <div className="column">
                        <TailSpin
                            className="test"
                            height="100"
                            width="100"
                            color='purple'
                            ariaLabel='loading'
                        />
                    </div>
                    <div className="column"></div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default LoadingSpinner;
