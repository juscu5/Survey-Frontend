import React from 'react'
import './SurveyFooter.scss'
import TPlogo from '../../../../../assets/Teleperformance.png'
import BarcLogo from '../../../../../assets/barclogo.svg'
import LinkIn from '../../../../../assets/linkedin-1.svg'
import Twitter from '../../../../../assets/twitter-1.svg'
import Facebook from '../../../../../assets/facebook-1-1.svg'
import Instagram from '../../../../../assets/instagram-1.svg'
import SubtitleParagraph from '../../../../../atoms/SubtitleParagraph'

const SurveyFooter = () => {
  return (
    <footer className='surveyFooter'>
        <hr/><br/>
        <div className='columns is-mobile'>
            <div className='column is-half subtitleP'>
                <SubtitleParagraph>Follow us on:</SubtitleParagraph>
            </div>
            <div className='column is-half logoP'>
                <a href="https://www.linkedin.com/company/teleperformance" rel="noopener" target="_blank"><img class="icon" alt="linkedin-1" src={LinkIn}/></a>&nbsp;&nbsp;
                <a href="https://twitter.com/Teleperformance" rel="noopener" target="_blank"><img class="icon" alt="twitter-1" src={Twitter}/></a>&nbsp;&nbsp;
                <a href="https://www.facebook.com/TeleperformanceGlobal" rel="noopener" target="_blank"><img class="icon" alt="facebook-1-1" src={Facebook}/></a>&nbsp;&nbsp;
                <a href="https://www.instagram.com/teleperformance_group/" rel="noopener" target="_blank"><img class="icon" alt="instagram-1" src={Instagram}/></a>
            </div>
        </div>
        <img className='tpLogo' src={TPlogo}/>
        <img className='barcLogo' src={BarcLogo}/>

    
    </footer>
  )
}

export default SurveyFooter