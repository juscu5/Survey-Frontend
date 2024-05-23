import React, {useState} from 'react'
import './SurveyView.scss'
import MainSurvey from '../../components/pages/survey/MainSurvey'
import ClosingPage from '../../components/pages/survey/components/pages/closing-page/ClosingPage'
import LoadingSpinner from '../../components/organisms/spinner/LoadingSpinner';
import SurveyHeader from '../../components/pages/survey/components/organisms/header/SurveyHeader';

const SurveyView = () => {

    const [mainSurvey, setMainSurvey] = useState(true);
    const [closingPage, setClosingPage] = useState(false);
    const [surveyHeader, setSurveyHeader] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const [uuid, setUuid] = useState();

    const apiRequestData = (data) => {
      setMainSurvey(false);
      setSurveyHeader(true);
      setLoading(true);
      setTimeout(() => {
        setTimeout(() => {
          setLoading(false);
          setSurveyHeader(false);
        }, 1);
        setClosingPage(data);
      }, 5000);
    }

    const uuidData = (data) => {
      setUuid(data);
    }

  return (
    <div className='surveyView'>
        {mainSurvey && <MainSurvey endingPage={apiRequestData} uuid={uuidData}/>}
        {surveyHeader && <SurveyHeader progressStatus={6}/>}
        {closingPage && <ClosingPage uuid={uuid}/>}
        {loading && <LoadingSpinner />}
    </div>
  )
}

export default SurveyView
