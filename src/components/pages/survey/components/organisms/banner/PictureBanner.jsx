import React from "react";
import './PictureBanner.scss'
import ClientRelatedPic from '../../../../../assets/TPhomepage2nd.png'

const PictureBanner = () => {
  return (
    <div className="bannerPic">
      <div className="loadBanner">
        <img className="loadBanner" src={ClientRelatedPic}/>
      </div>
      {/**<div className="loadBanner">
        {props.page === 2 ? <h1 className="title">Company Related</h1> : <img className="loadBanner" src={CompanyRelatedPic}/>}
      </div>
      <div className="loadBanner">
        {props.page === 3 ? <h1 className="title">Personal Related</h1> : <img className="loadBanner" src={PersonalRelatedPic}/>}
      </div>
      <div className="loadBanner">
        {props.page === 4 ? <h1 className="title">Wellness</h1> : <img className="loadBanner" src={WellnessPic}/>}
      </div>*/}
  </div>
  );
};

export default PictureBanner;
