import React, { useState } from 'react';
import './AdminPage.scss';
import CrudSurvey from './component/pages/survey-crud/CrudSurvey';
import CrudHeader from './component/organisms/header/CrudHeader';
import SurveyDashboard from './component/pages/survey-dashboard/SurveyDashboard';

const AdminPage = () => {

  const [ crudSurvey, setCrudSurvey ] = useState(false);
  const [ surveyDashboard, setSurveyDashboard ] = useState(true); 
  
  const dashboard = (data) => {
    setSurveyDashboard(data);
  }

  const surveyItem = (data) => {
    setCrudSurvey(data);
  }

  return (
    <div className='adminPage'>
        <div className='sectionHeader'>
          <CrudHeader dashboard={dashboard} surveyItem={surveyItem} crudSurvey={crudSurvey} surveyDashboard={surveyDashboard}/>
        </div>
        <div className='sectionContent'>
          {surveyDashboard && <SurveyDashboard/>}
          {crudSurvey && <CrudSurvey/>}
        </div>
    </div>
  )
} 

export default AdminPage;
