import React, { useState } from 'react';
import './PersonalReasonsTab.scss';
import MaterialTableEditable from '../organisms/table/MaterialTableEditable';
import { QuestionsHeader } from '../organisms/header/QuestionsHeader';

const PersonalReasonsTab = () => {

  const [ questionsState, setQuestionsState] = useState({
    title: "Personal Reason",
    header: QuestionsHeader.headerQuestions,
    row: "PERSONAL_REASON"
  });

  return (
    <div className='personalReasonsTab'>
      <MaterialTableEditable {...questionsState} />
    </div>
  )
}

export default PersonalReasonsTab;
