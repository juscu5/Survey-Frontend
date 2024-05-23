import React, { useState } from 'react';
import './HeaderOrganism.scss';

const HeaderOrganism = (props) => {

  return (
    <React.Fragment>
      <div className="headerOrganism" >
        <nav className='navbar is-fixed-top active' role="navigation" aria-label="dropdown navigation" sticky="top" {...props}>
            
        </nav>
    </div>
    </React.Fragment>
  )
}

export default HeaderOrganism
