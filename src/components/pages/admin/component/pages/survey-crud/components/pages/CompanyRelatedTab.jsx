import React, { useState } from 'react';
import './CompanyRelatedTab.scss'
import MaterialTableEditable from '../organisms/table/MaterialTableEditable';
import { QuestionsHeader } from '../organisms/header/QuestionsHeader';

const CompanyRelatedTab = () => {

  const [ questionsState, setQuestionsState] = useState({
    title: "Company Related",
    header: QuestionsHeader.headerQuestions,
    row: "COMPANY_RELATED"
  });

  return (
    <div className='companyRelatedTab'>
      <MaterialTableEditable {...questionsState}/>
    </div>
  )
}

export default CompanyRelatedTab;
