import React, {useState } from 'react';
import './WellnessTab.scss';
import MaterialTableEditable from '../organisms/table/MaterialTableEditable';
import { QuestionsHeader } from '../organisms/header/QuestionsHeader';

const WellnessTab = () => {

  const [ questionsState, setQuestionsState] = useState({
    title: "Wellness",
    header: QuestionsHeader.headerQuestions,
    row: "WELLNESS"
  });

  return (
    <div className='wellness'>
      <MaterialTableEditable {...questionsState}/>
    </div>
  )
}

export default WellnessTab;
