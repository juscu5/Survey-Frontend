import React, { useState }  from 'react';
import './WelcomeScreen.scss';
import BigButton from '../../../../../atoms/BigButton';
import TitleParagraph from '../../../../../atoms/TitleParagraph';
import SubtitleParagraph from '../../../../../atoms/SubtitleParagraph';
import UserModal from './components/organisms/UserModal';
import LoadingSpinner from '../../../../../organisms/spinner/LoadingSpinner';
import imgLogo from '../../../../../assets/logoSurvey.png'
import BarcLogo from '../../../../../assets/barclogo.svg';
import TPlogo from '../../../../../assets/Teleperformance.png';

const WelcomeScreen = (props) => {

  const [userModal, setUserModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const identityDataValue = (data) => {
    props.identityData(data);
  }

  const proceedToSurveyPage = (data) => {
    props.show(data);
  }

  const managerId = (data) =>{
    props.manId(data);
  }

  const openModal = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUserModal(true);
    }, 600);
  }

  return (
    <React.Fragment>
        <div className='WelcomeScreen'>

          <div className="columns">

            <div className="column">
              <div className='titleSection'>
                <div className="container is-fluid">
                  <section className="hero">
                    <div className="hero-body forTitle">
                      <TitleParagraph>Satisfaction Survey</TitleParagraph>
                      <br/>
                      <SubtitleParagraph>
                        We hear your voices.. Let us help you by taking this Survey
                      </SubtitleParagraph>
                      <br/>
                      <div className='hero-body forButton'>
                        <BigButton onClick={() => openModal()}>Get Started ➡</BigButton>
                      </div>
                      <br/>
                      <div className='logo'>
                        <img className='imgTplogo' src={TPlogo}/>
                        <img className='imgBarcLogo' src={BarcLogo}/>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            <div className="column">
              <div className='imageSection'>
                <img className='img' src={imgLogo}/>
              </div>
            </div>           
          </div>

          {loading &&<LoadingSpinner/>}
          {userModal &&<UserModal closeModal={setUserModal} proceed={proceedToSurveyPage} identityValue={identityDataValue}/>}
          

        </div>
    </React.Fragment>
  )
}

export default WelcomeScreen;
