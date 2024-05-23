import React, { useState } from 'react';
import LeadershipManagementTab from '../../pages/LeadershipManagementTab';
import ClientRelatedTab from '../../pages/ClientRelatedTab';
import CompanyRelatedTab from '../../pages/CompanyRelatedTab';
import PersonalReasonsTab from '../../pages/PersonalReasonsTab';
import WellnessTab from '../../pages/WellnessTab';

const TabOrganism = (props) => {

    const [toggleState, setToggleState] = useState(0);

    const [leadershipManagement, setLeadershipManagement] = useState(true)
    const [clientRelated, setClientRelated] = useState(false);
    const [companyRelated, setCompanyRelated] = useState(false);
    const [personalReasons, setPersonalReasons] = useState(false);
    const [wellness, setWellness] = useState(false);
    
    const toggleIndex = (index) => {
        setToggleState(index); 
        
        if (index === 0){
            setLeadershipManagement(true);
        }
        else{
            setLeadershipManagement(false);
        }

        if (index === 1){
            setClientRelated(true);
        }
        else{
            setClientRelated(false);
        }

        if (index === 2){
            setCompanyRelated(true);
        }
        else{
            setCompanyRelated(false);
        }

        if (index === 3){
            setPersonalReasons(true);
        }
        else{
            setPersonalReasons(false);
        }

        if (index === 4){
            setWellness(true);
        }
        else{
            setWellness(false);
        }
    }

  return (
    <React.Fragment>
        <div className="tabs is-boxed">
            <ul>
                <li className={toggleState === 0 ? "is-active" : ""} onClick={() => toggleIndex(0)}><a>Leadership Management</a></li>
                <li className={toggleState === 1 ? "is-active" : ""} onClick={() => toggleIndex(1)}><a>Client Related</a></li>
                <li className={toggleState === 2 ? "is-active" : ""} onClick={() => toggleIndex(2)}><a>Company Related</a></li>
                <li className={toggleState === 3 ? "is-active" : ""} onClick={() => toggleIndex(3)}><a>Personal Reasons</a></li>
                <li className={toggleState === 4 ? "is-active" : ""} onClick={() => toggleIndex(4)}><a>Wellness</a></li>
            </ul>
        </div>

        {leadershipManagement && <LeadershipManagementTab/>}
        {clientRelated && <ClientRelatedTab/>}
        {companyRelated && <CompanyRelatedTab/>}
        {personalReasons && <PersonalReasonsTab/>}
        {wellness && <WellnessTab/>}

    </React.Fragment>
  )
}

export default TabOrganism
