import React, { useState } from 'react';
import './ReactionsVote.scss';
import Smiley1 from '../../assets/smiley1.png';
import Smiley2 from '../../assets/smiley2.png';
import Smiley3 from '../../assets/smiley3.png';
import Smiley4 from '../../assets/smiley4.png';
import Smiley5 from '../../assets/smiley5.png';
import { useDispatch, useSelector } from "react-redux";
import { progressBar } from '../../../services/Progress';

const ReactionsVote = (props) => {

  const [ preventActivate, setPreventActivate ] = useState(1);

  const dispatch = useDispatch();

  //will insert here the React-Tooltip

  const pageScroll = props.id + 1;
  const progressBarStatus = parseFloat(100/props.idtotal) + parseFloat(useSelector((state) => state.progressBarReducer.progress));

  const onChange = (event) => {
    setPreventActivate((oldData) => (oldData + 1));
    props.activate(preventActivate);
    window.location='#'+pageScroll;
    if (preventActivate === 1){
      progressBar(dispatch, progressBarStatus.toFixed(0))
    }
  }


  return (
      <div className="reactionBarSelection">
        <div className="control">
          <div className="columns is-centered">
            <div className="column is-narrow">
              <label className='labelRadio'>
                <input className="radio" type="radio" name={'answer' + props.id} id='exDis' value="1" onChange={onChange}/>
                <div className='buttonSmiley5'> 
                  <img className='smileyProperty' src={Smiley5}/>
                </div>
              </label>
            </div>
            <div className="column is-narrow">
              <label className='labelRadio'>
                <input className="radio" type="radio" name={'answer' + props.id} id='dis' value="2" onChange={onChange}/>
                <div className='buttonSmiley4'>
                  <img className='smileyProperty' src={Smiley4}/>
                </div>
              </label>
            </div>
            <div className="column is-narrow">
              <label className='labelRadio'>
                <input className="radio" type="radio" name={'answer' + props.id} id='neu' value="2.5" onChange={onChange}/>
                <div className='buttonSmiley3'>
                  <img className='smileyProperty' src={Smiley3}/>
                </div>
              </label>
            </div>
            <div className="column is-narrow">
              <label className='labelRadio'>
                <input className="radio" type="radio" name={'answer' + props.id} id='sat' value="3" onChange={onChange}/>
                <div className='buttonSmiley2'>
                  <img className='smileyProperty' src={Smiley2}/>
                </div>
              </label>
            </div>
            <div className="column is-narrow">
              <label className='labelRadio'>
                <input className="radio" type="radio" name={'answer' + props.id} id='exSat' value="4" onChange={onChange}/>
                <div className='buttonSmiley1'>
                  <img className='smileyProperty' src={Smiley1}/>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      
  );
}

export default ReactionsVote;
