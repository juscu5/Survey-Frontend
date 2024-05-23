import React, { useState, useEffect } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import "./UserModal.scss";
import axios from "axios";
import MediumLabel from "../../../../../../../atoms/MediumLabel";
import NormalButton from "../../../../../../../atoms/NormalButton";
import Homepage from "../../../../../../../assets/homepage.png";
import HomepageFirst from "../../../../../../../assets/homepagefirst.png"
import LoadingSpinner from "../../../../../../../organisms/spinner/LoadingSpinner";

import config from '../../../../../../../../config';

//import uuid
import { v4 as uuid } from 'uuid';

const request = axios.create({
  baseURL: config().api.url,
});

const UserModal = (props) => {

  const [ccms, setCcms] = useState();

  const [manId, setManId] = useState();
  const [geo, setGeo] = useState([]);
  const [showFirst, setShowFirst] = useState(true);
  const [showNext, setShowNext] = useState(false);


  //button
  const [btnFirst, setBtnFirst] = useState(true);
  const [btnCheck, setBtnCheck] = useState(false);
  const [btnNext, setBtnNext] = useState(false);
  const [btnError, setBtnError] = useState(false);
  const [btnRetry, setBtnRetry] = useState(false);

  //spinner
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object().shape({
    GENDER: yup.string().required("Gender is required"),
    GEO: yup.string().required("Please choose your GEO"),
    WORKTYPE: yup.string().required("Work Type is required")
    /*DIRECTOR: yup.string().required("Please choose your Director"),*/
  });

  const [formState, setFormState] = useState({
    GENDER: "",
    GEO: "",
    WORKTYPE: "",
  });

  const getGeo = (GEO) => {
    request
      .get("/Identity/"+GEO)
      .then((response) => {
        setGeo(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const closeThisModal = () => {
    props.closeModal(false);
  };

  const proceedToSurvey = (dataValues) => {
    const identityValue = {
      UUID: uuid(),
      MAN_ID: manId,
      CCMS: ccms,
      ...dataValues
    }
    props.identityValue(identityValue);
    console.log(identityValue);
    props.proceed(false);
  };

  const CheckCcms = (event) => {
    event.preventDefault();
    setBtnFirst(false);
    setBtnError(false);
    setBtnRetry(false);

    if (btnNext === true){
      setShowFirst(false);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowNext(true);
      }, 600);
    }
    else{
      setBtnCheck(true);
      request
      .get("/Identity/CCMS?CCMS_ID="+ccms)
      .then((response) => {
        if(response.data <= Array(0)){
          console.log("no data");
          setBtnFirst(false);
          setBtnCheck(false);
          setBtnNext(false);
          setBtnError(false);
          setBtnRetry(true);
        }
        else if(response.data >= Array(1)){
          const resultCcms = response.data[0].employee_ident;
          if(parseFloat(ccms) === resultCcms){
            setManId(response.data[0].manager_ident);
            setCcms(ccms)
            setBtnFirst(false);
            setBtnCheck(false);
            setBtnNext(true);
            setBtnError(false);
            setBtnRetry(false);
          }
        } 
      })
      .catch((e) => {
        setBtnFirst(false);
        setBtnCheck(false);
        setBtnNext(false);
        setBtnError(true);
        setBtnRetry(false);
      });
    }
  }

  return (
    <>
    {showFirst &&
    //#region CCMS Modal
    <div className="modal is-active">
      <div className="modal-background"></div>
        <div className="modal-content">
          <section className="modal-card-body" style={{backgroundImage: `url(${HomepageFirst})`}}>
            <div className="columns is-multiline is-centered is-desktop">
              <div className="column hide"></div>
              <div className="column section">
                <div className="box">
                  {
                    //#region Label
                  }
                  <div className="field">
                    <div className="columns isCenter">
                      <div className="column"></div>
                      <div className="column">
                        <MediumLabel>User Information</MediumLabel>
                      </div>
                      <div className="column"></div>
                    </div>
                  </div>
                  {
                    //#endregion
                  }

                  <hr />

                  <form onSubmit={CheckCcms}>
                    <div className="fieldSection">
                      <div className="field">
                        <div className="columns is-left">
                          <div className="column">
                            <MediumLabel>CCMS ID:</MediumLabel>
                          </div>
                          <div className="column">
                            <div className="control">
                              <div className="input-group">
                                {
                                  btnNext === true ? 
                                  <span className="tag is-success is-light is-large">{ccms} &nbsp;✔</span>
                                  :
                                  <input className="input" 
                                        type="text" 
                                        id="ccms_id" 
                                        placeholder="Please input your CCMS ID" 
                                        pattern="[0-9]+"
                                        onChange={(e) => setCcms(e.target.value)} 
                                  />
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  <hr />

                  { btnFirst &&
                    //#region Button first
                  
                  <div className="buttonSection">
                    <div className="columns">
                      <div className="column is-5"></div>
                      <div className="column">
                        <NormalButton
                          className="button is-success"
                          type="submit"
                        >
                          Check
                        </NormalButton>
                      </div>
                      <div className="column"></div>
                    </div>
                  </div>
                  
                    //#endregion
                  }

                  { btnCheck &&
                    //#region Button Checking
                  
                  <div className="buttonSection">
                    <div className="columns">
                      <div className="column is-9">
                        <span className="tag is-info is-light is-large"><span class="loader"/> &nbsp; Checking<i>&nbsp;CCMS&nbsp;</i>if Valid </span>
                      </div>
                      <div className="column">
                        <NormalButton
                          className="button is-success is-loading"
                          type="submit"
                        >
                          Next ➜
                        </NormalButton>
                      </div>
                      <div className="column"></div>
                    </div>
                  </div>
                  
                    //#endregion
                  }

                  { btnNext &&
                    //#region Button Next
                  
                  <div className="buttonSection">
                    <div className="columns">
                      <div className="column is-9">
                        <span className="tag is-success is-light is-large"> ✔ CCMS is Valid </span>
                      </div>
                      <div className="column">
                        <NormalButton
                          className="button is-success"
                          type="submit"
                        >
                          Next ➜
                        </NormalButton>
                      </div>
                      <div className="column"></div>
                    </div>
                  </div>
                  
                    //#endregion
                  }

                  { btnRetry &&
                    //#region Button Retry
                  
                  <div className="buttonSection">
                    <div className="columns">
                      <div className="column is-9">
                        <span className="tag is-danger is-light is-large"> ✖ CCMS is not Valid </span>
                      </div>
                      <div className="column">
                        <NormalButton
                          className="button is-success"
                          type="submit"
                        >
                          Retry ⟳
                        </NormalButton>
                      </div>
                      <div className="column"></div>
                    </div>
                  </div>
                  
                    //#endregion
                  }

                  { btnError &&
                    //#region Button RetryError
                  
                  <div className="buttonSection">
                    <div className="columns">
                      <div className="column is-9">
                        <span className="tag is-warning is-light is-large"> ✖ Request Error: Please Retry </span>
                      </div>
                      <div className="column">
                        <NormalButton
                          className="button is-success"
                          type="submit"
                        >
                          Retry ⟳
                        </NormalButton>
                      </div>
                      <div className="column"></div>
                    </div>
                  </div>
                  
                    //#endregion
                  }

                  </form>
                </div>
              </div>
            </div>
          </section>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => closeThisModal()}
      ></button>
    </div>
    //#endregion
    }

    {loading &&<LoadingSpinner/>}
    {showNext && 
    //#region Formik Modal
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        
        <Formik
          initialValues={formState}
          onSubmit={proceedToSurvey}
          validateOnChange={true}
          validateOnBlur={false}
          validationSchema={validationSchema}
          enableReinitialize={true}
        >
          {({ handleChange, handleSubmit, errors, status, touched, values }) => (
            <Form>
              <section className="modal-card-body" style={{backgroundImage: `url(${Homepage})`}}>
                <div className="columns is-multiline is-centered is-desktop">
                  <div className="column hide"></div>

                  <div className="column section">
                    <div className="box">

                      {
                        //#region Label
                      }
                      <div className="field">
                        <div className="columns isCenter">
                          <div className="column"></div>
                          <div className="column">
                            <MediumLabel>User Information</MediumLabel>
                          </div>
                          <div className="column"></div>
                        </div>
                      </div>
                      {
                        //#endregion
                      }

                      <hr />
          
                      {
                        //#region fieldSection
                      }
                      <div className="fieldSection">

                        {
                          //#region CCMS Field
                        
                        /*<div className="field">
                          <div className="columns is-left">
                            <div className="column">
                              <MediumLabel>CCMS ID:</MediumLabel>
                            </div>
                            <div className="column">
                              <div className="control">
                                <div className="input-group">
                                  <div>
                                    <Field
                                      className={
                                        "input" +
                                        (errors.CCMS && touched.CCMS
                                          ? " is-danger"
                                          : "")
                                      }
                                      type="text"
                                      autoComplete="off"
                                      name="CCMS"
                                      placeholder="Please input your CCMS ID"
                                      handleChange={onchange=()=>getCCMS(values.CCMS)}
                                      handleSubmit={onchange=()=>getCCMS(values.CCMS)}
                                      pattern="[0-9]+"
                                    />
                                  </div>
                                  <div className="errorMessages">
                                    <ErrorMessage
                                      name="CCMS"
                                      component="span"
                                      className="tag is-danger is-light"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>*/
                        
                          //#endregion
                          //<hr />
                        }

                        

                        {
                          //#region Gender Field
                        }
                        <div className="field">
                          <div className="columns is-left">
                            <div className="column">
                              <MediumLabel>Gender:</MediumLabel>
                            </div>
                            <div className="column">
                              <div className="control">
                                <div className="input-group">
                                  <div className="columns is-left">
                                    <div className="column">
                                      <Field
                                        className={
                                          "radio" +
                                          (errors.GENDER && touched.GENDER
                                            ? " is-danger"
                                            : "")
                                        }
                                        type="radio"
                                        name="GENDER"
                                        value="Male"
                                      />
                                      &nbsp; Male
                                    </div>
                                    <div className="column">
                                      <Field
                                        className={
                                          "radio" +
                                          (errors.GENDER && touched.GENDER
                                            ? " is-danger"
                                            : "")
                                        }
                                        type="radio"
                                        name="GENDER"
                                        value="Female"
                                      />
                                      &nbsp; Female
                                    </div>
                                  </div>
                                  <div className="errorMessages">
                                    <ErrorMessage
                                      name="GENDER"
                                      component="span"
                                      className="tag is-danger is-light"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {
                          //#endregion
                        }

                        <hr />

                        {
                          //#region GEO Field
                        }
                        <div className="field">
                          <div className="columns is-left">
                            <div className="column">
                              <MediumLabel>GEO:</MediumLabel>
                            </div>
                            <div className="column">
                              <div className="control">
                                <div className="input-group">
                                  <div>
                                    <Field
                                      className={
                                        "select" +
                                        (errors.GEO && touched.GEO
                                          ? " is-danger"
                                          : "")
                                      }
                                      as="select"
                                      name="GEO"
                                      onClick={()=>getGeo(values.GEO)}
                                    >
                                      <option value="">-----</option>
                                      <option value="Philippines">
                                        Philippines
                                      </option>
                                      <option value="Canada">Canada</option>
                                      <option value="United States">United States</option>
                                    </Field>
                                  </div>
                                  <div className="errorMessages">
                                    <ErrorMessage
                                      name="GEO"
                                      component="span"
                                      className="tag is-danger is-light"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {
                          //#endregion
                        }

                        <hr />

                        {
                          //#region WorkType Field
                        }
                        <div className="field">
                          <div className="columns is-left">
                            <div className="column">
                              <MediumLabel>Work Type:</MediumLabel>
                            </div>
                            <div className="column">
                              <div className="control">
                                <div className="input-group">
                                  <div className="columns is-left">
                                    <div className="column">
                                      <Field
                                        className={
                                          "radio" +
                                          (errors.WORKTYPE && touched.WORKTYPE
                                            ? " is-danger"
                                            : "")
                                        }
                                        type="radio"
                                        name="WORKTYPE"
                                        value="WAHA"
                                      />
                                      &nbsp; WAHA
                                    </div>
                                    <div className="column">
                                      <Field
                                        className={
                                          "radio" +
                                          (errors.WORKTYPE && touched.WORKTYPE
                                            ? " is-danger"
                                            : "")
                                        }
                                        type="radio"
                                        name="WORKTYPE"
                                        value="On Site"
                                      />
                                      &nbsp; On Site
                                    </div>
                                  </div>
                                  <div className="errorMessages">
                                    <ErrorMessage
                                      name="WORKTYPE"
                                      component="span"
                                      className="tag is-danger is-light"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {
                          //#endregion
                        }
                        

                        {
                          //#region CommentCanBeUse Dir, Info, Etc
                        
                        /*<hr />*/
                        
                        /*List of Director Input*/
                        /*<div className="field">
                          <div className="columns is-left">
                            <div className="column">
                              <MediumLabel>Director:</MediumLabel>
                            </div>
                            <div className="column">
                              <div className="control">
                                <div className="input-group">
                                  <div>
                                    <Field
                                      className={
                                        "select" +
                                        (errors.DIRECTOR && touched.DIRECTOR
                                          ? " is-danger"
                                          : "")
                                      }
                                      as="select"
                                      name="DIRECTOR"
                                    >
                                    <option value="">-----</option>
                                    { /*This code is for Static Data GEO
                                      values.GEO === "Philippines" ? 
                                        <>
                                          <option value="Dats Marfranse Salikala">Dats Marfranse Salikala</option>
                                          <option value="Jeremiah Rose">Jeremiah Rose</option>
                                          <option value="Almarian Pailden">Almarian Pailden</option>
                                          <option value="Ma. Ricci Mae Ramos">Ma. Ricci Mae Ramos</option>
                                          <option value="Maria Criselda Cajayon">Maria Criselda Cajayon</option>
                                          <option value="Arvin Dela Torre">Arvin Dela Torre</option>
                                          <option value="Cameron Lashley">Cameron Lashley</option>
                                          <option value="Mary Howard">Mary Howard</option>
                                          <option value="Jan Michael Villanueva">Jan Michael Villanueva</option>
                                          <option value="Analyn Lubao">Analyn Lubao</option>
                                          <option value="Amol Dhurandhar">Amol Dhurandhar</option>
                                          <option value="Ma. Cristina Gutierrez">Ma. Cristina Gutierrez</option>
                                          <option value="Christian Mark Basilio">Christian Mark Basilio</option>
                                          <option value="Florbelle Sison">Florbelle Sison</option>
                                          <option value="Raymond Neil Mir">Raymond Neil Mira</option>
                                          <option value="Paul Infante Uy">Paul Infante Uy</option>
                                          <option value="Ivan Roderno">Ivan Roderno</option>
                                          <option value="Manuel Enrico Bartolata">Manuel Enrico Bartolata</option>
                                          <option value="Mahadevan Sreekrishnan Iyer">Mahadevan Sreekrishnan Iyer</option>
                                          <option value="Jennilyn Segovia">Jennilyn Segovia</option>
                                          <option value="Pawan Gupta">Pawan Gupta</option>
                                        </>
                                      : 
                                      values.GEO === "Canada" ?  
                                        <>
                                          <option value="Amol Dhurandhar">Amol Dhurandhar</option>
                                          <option value="Paul Infante Uy">Paul Infante Uy</option>
                                          <option value="Jeremiah Rose">Jeremiah Rose</option>
                                          <option value="Almarian Pailden">Almarian Pailden</option>
                                          <option value="Donald Fletcher">Donald Fletcher</option>
                                          <option value="Cameron Lashley">Cameron Lashley</option>
                                          <option value="Brandon Thompson">Brandon Thompson</option>
                                          <option value="Mary Howard">Mary Howard</option>
                                          <option value="Pawan Gupta">Pawan Gupta</option>
                                        </>
                                      :
                                      values.GEO === "United States" ?
                                        <>
                                          <option value="Arvin Dela Torre">Arvin Dela Torre</option>
                                          <option value="Maria Criselda Cajayon">Maria Criselda Cajayon</option>
                                          <option value="Almarian Pailden">Almarian Pailden</option>
                                          <option value="Ma. Ricci Mae Ramos">Ma. Ricci Mae Ramos</option>
                                          <option value="Donald Fletcher">Donald Fletcher</option>
                                          <option value="Cameron Lashley">Cameron Lashley</option>
                                          <option value="Brandon Thompson">Brandon Thompson</option>
                                          <option value="Mary Howard">Mary Howard</option>
                                          <option value="Ma. Cristina Gutierrez">Ma. Cristina Gutierrez</option>
                                          <option value="Christian Mark Basilio">Christian Mark Basilio</option>
                                          <option value="Florbelle Sison">Florbelle Sison</option>
                                          <option value="Raymond Neil Mira">Raymond Neil Mira</option>
                                          <option value="Paul Infante Uy">Paul Infante Uy</option>
                                          <option value="Dats Marfranse Salikala">Dats Marfranse Salikala</option>
                                          <option value="Jeremiah Rose">Jeremiah Rose</option>
                                          <option value="Amol Dhurandhar">Amol Dhurandhar</option>
                                        </>
                                      : <></>
                                    }
                                    {/* This code is for Query
                                    /*geo?.map((obj) => {
                                      return(
                                        <option value={obj['WFM Director']}>{obj['WFM Director']}</option>
                                        )
                                      })
                                    </Field>
                                  </div>
                                  <div className="errorMessages">
                                    <ErrorMessage
                                      name="DIRECTOR"
                                      component="span"
                                      className="tag is-danger is-light"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>*/
                        
                        /*Information Area*/
                        /*<div className='infoArea'>
                          <div className="notification is-warning is-light">
                            <strong>NOTE: </strong> You can only take the survey once a month.
                            If you already took the survey, your <strong>CCMS ID</strong> 
                            &nbsp;will be on <strong>31 Days or 1 Month</strong> cooldown.
                          </div>
                        </div>*/
                      
                          //#endregion
                        }

                      </div>

                      {
                        //#endregion
                      }

                      <hr />
                      
                      {
                        //#region Button Start Survey
                      }
                      <div className="buttonSection">
                        <div className="columns">
                          <div className="column"></div>
                          <div className="column">
                            <NormalButton
                              className="button is-success"
                              type="submit"
                            >
                              Start the Survey
                            </NormalButton>
                          </div>
                          <div className="column"></div>
                        </div>
                      </div>
                      {
                        //#endregion
                      }
                      
                    </div>
                  </div>
                </div>
              </section>
            </Form>
          )}
        </Formik>      
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => closeThisModal()}
      ></button>
    </div>

    //#endregion
    }
    </>
  );
};

export default UserModal;
