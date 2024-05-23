import React, { useState, useEffect } from "react";
import "./MainSurvey.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addIdentity, addAnswer } from "../../../services/Survey";
import LoadingSpinner from "../../organisms/spinner/LoadingSpinner";
import SurveyHeader from "./components/organisms/header/SurveyHeader";
import PictureBanner from "./components/organisms/banner/PictureBanner";
import DivWave from "../../atoms/DivWave";
import ProgressBar from "../../atoms/ProgressBar";
import WelcomeScreen from "./components/pages/welcome-screen/WelcomeScreen";
import LeadershipManagement from "./components/pages/leadership-management/LeadershipManagement";
import ClientRelatedSurvey from "./components/pages/client-related-survey/ClientRelatedSurvey";
import CompanyRelatedSurvey from "./components/pages/company-related-survey/CompanyRelatedSurvey";
import PersonalReasonsSurvey from "./components/pages/personal-reasons-survey/PersonalReasonsSurvey";
import WellnessSurvey from "./components/pages/wellness-survey/WellnessSurvey";
import FeedbackPage from "./components/pages/feedback-page/FeedbackPage";

import config from "../../../config"

const request = axios.create({
    baseURL: config().api.url,
});


const MainSurvey = (props) => {
  const [loading, setLoading] = useState(false);

  //for Page Setup
  const [welcomeScreen, setWelcomeScreen] = useState(true);
  const [headerArea, setHeaderArea] = useState(false);
  const [progressBarCount, setProgressBarCount ] = useState(0);

  //for Survey Area View and Data
  const [leadershipManagementSurvey, setLeadershipManagementSurvey] = useState(false);
  const [clientRelatedSurvey, setClientRelatedSurvey] = useState(false);
  const [companyRelatedSurvey, setCompanyRelatedSurvey] = useState(false);
  const [personalReasonsSurvey, setPersonalReasonsSurvey] = useState(false);
  const [wellnessSurvey, setWellnessSurvey] = useState(false);
  const [leadershipManagementData, setLeadershipManagementData] = useState([]);
  const [clientRelatedData, setClientRelatedData] = useState([]);
  const [companyRelatedSurveyData, setCompanyRelatedSurveyData] = useState([]);
  const [personalReasonsSurveyData, setPersonalReasonsSurveyData] = useState([]);
  const [wellnessSurveyData, setWellnessSurveyData] = useState([]);

  //for Closing Screen
  const [feedbackPage, setFeedbackPage] = useState(false);

  //for Collecting the Data of Welcome Screen to 5 Step of Survey
  const [welcomeScreenDataAnswer, setWelcomeScreenDataAnswer] = useState([]);
  const [surveyAnswer, setSurveyAnswer] = useState([]);

  //functions
  const dispatch = useDispatch();

  useEffect(() => {
    window.onbeforeunload = function () {
      return "";
    };
    leadershipManagementDataLoad();
    clientRelatedDataLoad();
    companyRelatedDataLoad();
    personalReasonsDataLoad();
    wellnessDataLoad();
  }, []);

  const leadershipManagementDataLoad = () => {
    request
      .get("/Survey/LEADERSHIP_MANAGEMENT")
      .then((response) => {
        setLeadershipManagementData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const clientRelatedDataLoad = () => {
    request
      .get("/Survey/CLIENT_RELATED")
      .then((response) => {
        setClientRelatedData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const companyRelatedDataLoad = () => {
    request
      .get("/Survey/COMPANY_RELATED")
      .then((response) => {
        setCompanyRelatedSurveyData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const personalReasonsDataLoad = () => {
    request
      .get("/Survey/PERSONAL_REASON")
      .then((response) => {
        setPersonalReasonsSurveyData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const wellnessDataLoad = () => {
    request
      .get("/Survey/WELLNESS")
      .then((response) => {
        setWellnessSurveyData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const nextPage = (data) => {
    setWelcomeScreen(data);
    setLoading(true);
    setTimeout(() => {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      setHeaderArea(true);
      setLeadershipManagementSurvey(true);
    }, 1000);
  };

  const finishSurvey = (data) => {
    setFeedbackPage(data);
  };

  const identityData = (data) => {
    setWelcomeScreenDataAnswer(data);
  };

  const surveyAnswerData = (data) => {
    setSurveyAnswer((oldData) => [...oldData, data]);
  };

  const dbPushAnswer = (data) => {
    addIdentity(dispatch, welcomeScreenDataAnswer);
    surveyAnswer?.map((obj, idx) => {
      const answerData = {
        IDENTITY_ID: obj?.IDENTITY_ID,
        Q_ID: obj?.Q_ID,
        RESPONSE: obj?.RESPONSE,
      };
      return addAnswer(dispatch, answerData);
    });
    setFeedbackPage(data);
    setHeaderArea(data);
    setWelcomeScreenDataAnswer([]);
    setSurveyAnswer([]);
    props.endingPage(true);
    props.uuid(welcomeScreenDataAnswer.UUID)
  };

  return (
    <div className="mainSurvey">
      {/*Welcome Screen*/}
      {welcomeScreen && (
        <WelcomeScreen show={nextPage} identityData={identityData} />
      )}

      {/*Header Area*/}
      {headerArea && (
        <SurveyHeader
          progressStatus={
              leadershipManagementSurvey === true
              ? 0
              : clientRelatedSurvey === true
              ? 1
              : companyRelatedSurvey === true
              ? 2
              : personalReasonsSurvey === true
              ? 3
              : wellnessSurvey === true
              ? 4
              : feedbackPage === true
              ? 5
              : 10
          }
        />
      )}
      {feedbackPage === true ? false : headerArea && <PictureBanner/>}
      {feedbackPage === true ? false : headerArea && <DivWave />}
      {feedbackPage === true ? false : headerArea && (
        <ProgressBar 
          progressBarStatus={progressBarCount}
          page={
              leadershipManagementSurvey === true
              ? 0
              : clientRelatedSurvey === true
              ? 1
              : companyRelatedSurvey === true
              ? 2
              : personalReasonsSurvey === true
              ? 3
              : wellnessSurvey === true
              ? 4
              : 10
          }
        />
      )}
      
      {/*Survey Area*/}
      {leadershipManagementSurvey && (
        <LeadershipManagement
          close={setLeadershipManagementSurvey}
          nextSurvey={setClientRelatedSurvey}
          data={leadershipManagementData}
          uuid={welcomeScreenDataAnswer.UUID}
          answer={surveyAnswerData}
        />
      )}
      {clientRelatedSurvey && (
        <ClientRelatedSurvey
          close={setClientRelatedSurvey}
          nextSurvey={setCompanyRelatedSurvey}
          data={clientRelatedData}
          uuid={welcomeScreenDataAnswer.UUID}
          answer={surveyAnswerData}
        />
      )}
      {companyRelatedSurvey && (
        <CompanyRelatedSurvey
          close={setCompanyRelatedSurvey}
          nextSurvey={setPersonalReasonsSurvey}
          data={companyRelatedSurveyData}
          uuid={welcomeScreenDataAnswer.UUID}
          answer={surveyAnswerData}
        />
      )}
      {personalReasonsSurvey && (
        <PersonalReasonsSurvey
          close={setPersonalReasonsSurvey}
          nextSurvey={setWellnessSurvey}
          data={personalReasonsSurveyData}
          uuid={welcomeScreenDataAnswer.UUID}
          answer={surveyAnswerData}
        />
      )}
      {wellnessSurvey && (
        <WellnessSurvey
          close={setWellnessSurvey}
          finishScreen={finishSurvey}
          data={wellnessSurveyData}
          uuid={welcomeScreenDataAnswer.UUID}
          answer={surveyAnswerData}
        />
      )}

      {/*Feedback Screen*/}
      {feedbackPage && <FeedbackPage close={dbPushAnswer} uuid={welcomeScreenDataAnswer.UUID}/>}

      {/*loadingUI*/}
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default MainSurvey;
