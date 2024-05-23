import React, {useState, useEffect} from 'react';
import './CompanyRelatedSurvey.scss';
import ReactionsVote from '../../../../../organisms/reactions/ReactionsVote';
import BigButton from '../../../../../atoms/BigButton';
import SurveyFooter from '../../organisms/footer/SurveyFooter';
import { useDispatch } from "react-redux";
import { messageNotif } from "../../../../../../services/Message";
import { progressBar } from '../../../../../../services/Progress';

const CompanyRelatedSurvey = (props) => {
  const [ questionsState, setQuestionsState] = useState(props.data);
  const [ questionActivate, setQuestionActivate ] = useState(0);

  const dispatch = useDispatch();
  
  useEffect(() => {
    window.location='#survey';
  }, []);

  //for Question Activation Validation
  const activateQuestions = (event) => {
    if(event === 1){
      setQuestionActivate((oldData) => (oldData + 1))
    }
  }

  //to go to Next Survey
  const nextSurvey = (event) => {
    event.preventDefault();

    questionsState?.map((obj, idx) => {
      const data = {
        IDENTITY_ID: props.uuid,
        Q_ID: obj.Q_ID,
        RESPONSE: event.target['answer' + idx].value
      }
      return(props.answer(data));
    })
    progressBar(dispatch, 0);
    props.close(false);
    props.nextSurvey(true);
  }

  //Questions Validation Error
  const error = (event) => {
    event.preventDefault();
    const message = {
      notifStatus: true,
      notifMessage: "Answer all the Company Related Questions first before continue on the next Survey"
    }
    messageNotif(dispatch, message);
    window.location='#survey';
  }

  return (
    <div className='companyRelatedSurvey'>
      <div className='companyRelatedSurveyContent'>
        <form onSubmit={questionsState.length === questionActivate ? nextSurvey : error}>
          {
            questionsState?.map((obj, idx) => {
              return(      
                <div>
                  <div className={questionActivate >= idx ? 'questions' : 'disable'} id={idx-(-1)}>
                    <div>{obj?.QUESTIONS}</div>
                      <br/>
                      <div className="columns is-centered">
                        <div className="column">
                          <p className='labelED'>Extremely <br/> Dissatisfied</p>
                        </div>
                        <div className="column">
                          <div className='reactionBar'>
                            <ReactionsVote id={idx} activate={activateQuestions} idtotal={questionsState.length}/>
                          </div>
                        </div>
                        <div className="column">
                          <p className='labelES'>Extremely <br/> Satisfied</p>
                        </div>
                      </div>
                      <br/><hr/>
                  </div>
                </div>  
              )
            })
          }<br/><br/>
            <BigButton type="submit">Next</BigButton>
          <br/><br/><br/><br/><br/>
        </form>
      </div>
      <SurveyFooter/>
    </div>
  )
}

export default CompanyRelatedSurvey;
