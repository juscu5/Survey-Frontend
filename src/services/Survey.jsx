import { ActionCreators } from "../redux/SurveyReducer";
import * as axios from 'axios';
import config from "../config"

const request = axios.create({
    baseURL: config().api.url,
});


export const addIdentity = async (dispatch, newData) => {
    try {
        //api call
        const idData = {
            IDENTITY_ID: newData.UUID,
            CCMS_ID: newData.CCMS,
            MANAGER_IDENT: newData.MAN_ID+'',
            GENDER: newData.GENDER,
            GEO: newData.GEO,
            WORKTYPE: newData.WORKTYPE,
            DIRECTOR: newData.DIRECTOR,
            STATUS: true
        }
        let { data } = await request.post("/Identity", idData);
        dispatch(ActionCreators.addIdentity(data));
    } catch {
        console.log("Error!");
    }  
}

export const addAnswer = async (dispatch, newData) => {
    try {
        //api call
        let { data } = await request.post("/Respond", newData);
        dispatch(ActionCreators.addAnswer(data));
    } catch (e) {
        console.log(e);
    }  
}