import React, {useState} from "react";
import './LeadershipManagementTab.scss';
import MaterialTableEditable from '../organisms/table/MaterialTableEditable';
import { QuestionsHeader } from '../organisms/header/QuestionsHeader';

const LeadershipManagementTab = () => {
    
  const [questionsState, setQuestionsState] = useState({
    title: "Leadership Management",
    header: QuestionsHeader.headerQuestions,
    row: "LEADERSHIP_MANAGEMENT",
  });

  return (
    <div className="leadershipManagementTab">
      <MaterialTableEditable {...questionsState} />
    </div>
  );
};

export default LeadershipManagementTab;
