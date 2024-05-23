import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import 'bulma/css/bulma.css';
import './App.scss';
import AdminPage from './components/pages/admin/AdminPage';
import SurveyView from './view/survey-view/SurveyView';
import FeedbackPage from './components/pages/survey/components/pages/feedback-page/FeedbackPage';
import SurveyFooter from './components/pages/survey/components/organisms/footer/SurveyFooter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/CTSS-Survey' exact element={<SurveyView/>} />
          <Route path='/CTSS-Survey/adm' exact element={<AdminPage/>} />
          <Route path='/CTSS-Survey/debug' exact element={<SurveyFooter/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
