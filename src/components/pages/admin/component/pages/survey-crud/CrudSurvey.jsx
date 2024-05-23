import React, { useState } from 'react';
import './CrudSurvey.scss';
import TabOrganism from './components/organisms/tab/CrudTabOrganism';

const CrudSurvey = (props) => {

  return (
    <div className='crudSurvey'>
      <div className="tabOrganism">
        <TabOrganism />
      </div>
    </div>
  )
}

export default CrudSurvey;
