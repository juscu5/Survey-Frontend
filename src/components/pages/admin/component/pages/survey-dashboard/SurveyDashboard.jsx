import React, { useState, useEffect } from "react";
import "./SurveyDashboard.scss";
import DivBox from "../../../../../atoms/DivBox";
import SubtitleParagraph from "../../../../../atoms/SubtitleParagraph";
import TitleParagraph from "../../../../../atoms/TitleParagraph";
import maleLogo from "../../../../../assets/male.png";
import femaleLogo from "../../../../../assets/female.png";
import SurveyPieCharts from "./components/charts/SurveyPieCharts";
import axios from "axios";

import config from '../../../../../../config'

const request = axios.create({
    baseURL: config().api.url,
});

const SurveyDashboard = (props) => {
  const [totalRespondent, setTotalRepondent] = useState();
  const [totalMale, setTotalMale] = useState();
  const [totalFemale, setTotalFemale] = useState();
  const [satisfyResponse, setSatisfyResponse] = useState();
  const [totalResponse, setTotalResponse] = useState();

  useEffect(() => {
    loadChartData();
  }, []);

  const loadChartData = () => {
    request
      .get("/Chart/Total_Respondent")
      .then((response) => {
        setTotalRepondent(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

    request
      .get("/Chart/Total_Male")
      .then((response) => {
        setTotalMale(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

    request
      .get("/Chart/Total_Female")
      .then((response) => {
        setTotalFemale(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

    request
      .get("/Chart/Satisfy_Response")
      .then((response) => {
        setSatisfyResponse(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

    request
      .get("/Chart/Total_Response")
      .then((response) => {
        setTotalResponse(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="surveyDashboard">
      <div className="columns">
        <div className="column">
          <DivBox>
            <SubtitleParagraph>Total Respondents</SubtitleParagraph>
            {totalRespondent?.map((obj, idx) => {
              return (
                <div className="countTotal">
                  <TitleParagraph>{obj.Total_Respondent}</TitleParagraph>
                </div>
              );
            })}
          </DivBox>
        </div>
        <div className="column">
          <DivBox>
            <div className="columns">
              <div className="column">
                <figure className="image">
                  <img src={maleLogo} />
                </figure>
              </div>
              <div className="column">
                <SubtitleParagraph>Male</SubtitleParagraph>
                {totalMale?.map((obj1, idx) => {
                  return totalRespondent?.map((obj2, idx) => {
                    const percent = (
                      (obj1.Total_Male / obj2.Total_Respondent) *
                      100
                    ).toFixed(0);
                    return (
                      <>
                        <TitleParagraph>{obj1.Total_Male}</TitleParagraph>
                        <SubtitleParagraph>{percent}%</SubtitleParagraph>
                      </>
                    );
                  });
                })}
              </div>
            </div>
          </DivBox>
        </div>
        <div className="column">
          <DivBox>
            <div className="columns">
              <div className="column">
                <div className="column">
                  <figure className="image">
                    <img src={femaleLogo} />
                  </figure>
                </div>
              </div>
              <div className="column">
                <SubtitleParagraph>Female</SubtitleParagraph>
                {totalFemale?.map((obj1, idx) => {
                  return totalRespondent?.map((obj2, idx) => {
                    const percent = (
                      (obj1.Total_Female / obj2.Total_Respondent) *
                      100
                    ).toFixed(0);
                    return (
                      <>
                        <TitleParagraph>{obj1.Total_Female}</TitleParagraph>
                        <SubtitleParagraph>{percent}%</SubtitleParagraph>
                      </>
                    );
                  });
                })}
              </div>
            </div>
          </DivBox>
        </div>
        <div className="column">
          <DivBox>
            <SubtitleParagraph>Overall Satisfaction</SubtitleParagraph>
            <div className="countTotal">
              {satisfyResponse?.map((obj1, idx) => {
                return totalResponse?.map((obj2, idx) => {
                  const percent = (
                    (obj1.Satisfy_Response / obj2.Total_Response) *
                    100
                  ).toFixed(0);
                  return <TitleParagraph>{percent}%</TitleParagraph>;
                });
              })}
            </div>
          </DivBox>
        </div>
      </div>

      <DivBox></DivBox>

      <div className="columns">
        <div className="column">
          <DivBox>test</DivBox>
        </div>
        <div className="column">
          <DivBox>test</DivBox>
        </div>
      </div>
    </div>
  );
};

export default SurveyDashboard;
