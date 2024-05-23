import React,{ useState, useEffect } from 'react'
import './FeedbackPage.scss'
import BigButton from '../../../../../atoms/BigButton'
import SubtitleParagraph from '../../../../../atoms/SubtitleParagraph'
import RatingArea from './components/organisms/RatingArea'
import SurveyFooter from '../../organisms/footer/SurveyFooter'
import { useDispatch } from "react-redux";
import { addFeedback } from '../../../../../../services/Feedback'

const FeedbackPage = (props) => {

  const [ratingData, setRatingData] = useState();
  const [commentData, setCommentData] = useState();

  const dispatch = useDispatch();
 
  useEffect(() => {
    window.location='#feedback';
  }, []);

  const doneSurvey = () => {
    const feedbackData = {
      IDENTITY_ID: props.uuid,
      FB_RATINGS: ratingData,
      FB_COMMENTS: commentData
    }
    addFeedback(dispatch, feedbackData);
    props.close(false);
  }

  const commentChanged = (newComment) => {
    setCommentData(newComment.target.value)
  }

  const ratingChanged = (data) => {
    setRatingData(data);
  }
  
  return (
    <div className='finishSurvey' id='feedback'>
      <div className="columns">
        <div className="column">
          <div className='titleSection'>
            <div className="container is-fluid">
              <section className="hero">
              <br/><br/><br/><br/><br/><br/><br/>
                <div className="hero-body forTitle">

                <br/>
                  <div className='messageText'>
                    <SubtitleParagraph>One last thing, your Feedback!</SubtitleParagraph>
                  </div>

                  <br/><br/>
                  
                  <RatingArea newRating={ratingChanged}/> <br/>
          
                  <div className='commentArea'>
                    <textarea className="textarea has-fixed-size" placeholder="Write down your comment . . ." onChange={commentChanged}></textarea>
                  </div>

                  <br/>

                  <div className='infoArea'>
                    <article className="message is-info">
                      <div className="message-header">
                        <p>Info</p>
                      </div>
                      <div className="message-body"> 
                        The <strong>rating</strong> and <strong>comment</strong> are optional, even without answer you can <strong>continue</strong>.<br/>
                        but your <strong>feedback</strong> is important for us to improve the overall survey. Thank you!
                      </div>
                    </article>
                  </div>

                  <br/>
                  <div className='hero-body forButton'>
                    <BigButton onClick={() => doneSurvey()}>Continue</BigButton>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <SurveyFooter/>
    </div>
  )
}

export default FeedbackPage
