import { configureStore } from '@reduxjs/toolkit';
import QuestionsReducer from "./QuestionReducer.jsx";
import SurveyReducer from './SurveyReducer.jsx';
import NotifMessageReducer from './NotifMessageReducer.jsx'
import ProgressBarReducer from './ProgressBarStatus.jsx';
import FeedbackReducer from './FeedbackReducer.jsx';
import SatisfactionResult from './SatisfactionResult.jsx';

export default configureStore({
    reducer: {
        questionsReducer: QuestionsReducer,
        surveyReducer: SurveyReducer,
        notifMessageReducer: NotifMessageReducer,
        progressBarReducer: ProgressBarReducer,
        feedbackReducer: FeedbackReducer,
        satisfactionResult: SatisfactionResult,
    }
})