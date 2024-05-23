import React, { useState } from 'react';
import './ClientRelatedTab.scss';
import MaterialTableEditable from '../organisms/table/MaterialTableEditable';
import { QuestionsHeader } from '../organisms/header/QuestionsHeader';

const ClientRelatedTab = () => {  

  const [ questionsState, setQuestionsState] = useState({
      title: "Client Related",
      header: QuestionsHeader.headerQuestions,
      row: "CLIENT_RELATED"
  });

  return (
    <div className='clientRelatedTab'>
      <MaterialTableEditable {...questionsState}/>
    </div>
  )
}

export default ClientRelatedTab
