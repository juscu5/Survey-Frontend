import React,{useEffect, useState} from 'react'
import './ClosingPage.scss'
import SurveyHeader from '../../organisms/header/SurveyHeader'
import SubtitleParagraph from '../../../../../atoms/SubtitleParagraph';
import BigButton from '../../../../../atoms/BigButton';
import SurveyFooter from '../../organisms/footer/SurveyFooter';
import { useDispatch } from "react-redux";
import { getExDis } from '../../../../../../services/Satisfaction';
import { getDis } from '../../../../../../services/Satisfaction';
import { getNeu } from '../../../../../../services/Satisfaction';
import { getSat } from '../../../../../../services/Satisfaction';
import { getExSat } from '../../../../../../services/Satisfaction';
import { useSelector } from 'react-redux';

const ClosingPage = (props) => {

  const exDis = useSelector((state) => state.satisfactionResult.exDissatisfied);
  const dis = useSelector((state) => state.satisfactionResult.dissatisfied);
  const neu = useSelector((state) => state.satisfactionResult.neutral);
  const sat = useSelector((state) => state.satisfactionResult.satisfied);
  const exSat = useSelector((state) => state.satisfactionResult.exSatisfied);

  const dispatch = useDispatch();

  useEffect(() => {
    window.onbeforeunload="";
    getSatisfaction();
  }, []);


  const getSatisfaction = () => {
    const exDis = {
      IDENTITY_ID: props.uuid,
      RESPONSE: 1
    }
    const dis = {
      IDENTITY_ID: props.uuid,
      RESPONSE: 2
    }
    const neu = {
      IDENTITY_ID: props.uuid,
      RESPONSE: 2.5
    }
    const sat = {
      IDENTITY_ID: props.uuid,
      RESPONSE: 3
    }
    const exSat = {
      IDENTITY_ID: props.uuid,
      RESPONSE: 4
    }
    getExDis(dispatch, exDis);
    getDis(dispatch, dis);
    getNeu(dispatch, neu);
    getSat(dispatch, sat);
    getExSat(dispatch, exSat);
  }

  const onClose = () => {
    window.onbeforeunload="";
    window.location.reload();
  }
  
  return (
    <div className='closingPage'>
      <div className='closingPageContent'>
        <div className='resultSection'>
          {true && <SurveyHeader progressStatus={6}/>}
          {
            exDis?.map((exDisObj) => {
              return dis?.map((disObj) =>{
                return neu?.map((neuObj) =>{
                  return sat?.map((satObj) =>{
                    return exSat?.map((exSatObj) =>{
                      const totalSatisfactoryScore = ((((
                        (exDisObj.Satisfy_Response * 1) +
                        (disObj.Satisfy_Response * 2) +
                        (neuObj.Satisfy_Response * 2.5) +
                        (satObj.Satisfy_Response *3) +
                        (exSatObj.Satisfy_Response * 4)) / 172) * 100).toFixed(0)
                      );
                      return(
                        <div>
                          <p className="headTitle">You are<strong>&nbsp;{totalSatisfactoryScore}% </strong> Satisfied</p>
                        </div>
                      )
                    })
                  })
                })
              })
            })
          }
        </div>
        <div className='endingMessage'>
          <SubtitleParagraph>Thank you for taking the Survey!</SubtitleParagraph>
        </div><br/><br/><br/>
        <BigButton onClick={()=>onClose()}>Done</BigButton>
      </div><br/><br/>
      <SurveyFooter/>
    </div>
  )
}

export default ClosingPage