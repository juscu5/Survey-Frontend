import React, { useState, useEffect } from "react";
import "./SurveyHeader.scss";
import HeaderOrganism from "../../../../../../components/organisms/header/HeaderOrganism";
import imgLogo from "../../../../../assets/wfmlogo.png";
import StepProgress from "./components/StepProgress";
import ProgressBar from "../../../../../atoms/ProgressBar";
import TitleParagraph from "../../../../../atoms/TitleParagraph";
import { NotificationDanger } from "../../../../../organisms/notification/Notification";
import { useSelector } from "react-redux";

const SurveyHeader = (props) => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const message = useSelector((state) => state.notifMessageReducer.message.message);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  return (
    <React.Fragment>
      <div className="surveyHeader">
        <HeaderOrganism>
          <div className="navbar-brand">
            <div className="navbar-start">
              <a className="navbar-item">
                <img className="imgLogo" src={imgLogo} />
              </a>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <StepProgress progressStatus={props.progressStatus} />
            </div>
          </div>
          <div className="notificationArea">
            <NotificationDanger>{message}</NotificationDanger>
          </div>
          <div className={scrollPosition >= 700 ? "progressArea" : "progressAreaDisable"}>
            <ProgressBar page={props.progressStatus}/>
          </div>
        </HeaderOrganism>
      </div>
    </React.Fragment>
  );
};
export default SurveyHeader;
