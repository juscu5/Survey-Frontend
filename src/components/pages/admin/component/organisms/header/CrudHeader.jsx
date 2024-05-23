import React from 'react';
import './CrudHeader.scss';
import HeaderOrganism from '../../../../../organisms/header/HeaderOrganism';
import tplogo from '../../../../../assets/logoSurvey.png'
import TitleParagraph from '../../../../../atoms/TitleParagraph';

const CrudHeader = (props) => {

  const dashboard = () => {
    props.dashboard(true);
    props.surveyItem(false);
  }

  const surveyItem = () => {
    props.dashboard(false);
    props.surveyItem(true);
  }

  return (
    <React.Fragment>
        <div className='crudHeader'>
            <HeaderOrganism>
            <div className="navbar-start">
              <a className="navbar-item noHover">
                <img className="imgLogo" src={tplogo} />
                <TitleParagraph>	&nbsp; Survey Tool</TitleParagraph>
              </a>
            </div>
            <div className="navbar-end">
              <a className={props.surveyDashboard === true ? "navbar-item activeDb" : "navbar-item dashboard"} onClick={() => dashboard()}>
                Dashboard
              </a>
              <a className={props.crudSurvey === true ? "navbar-item activeItem" : "navbar-item item"} onClick={() => surveyItem()}>
                Survey Item
              </a>
            </div>
            </HeaderOrganism>
        </div>
    </React.Fragment>
  )
}
export default CrudHeader
