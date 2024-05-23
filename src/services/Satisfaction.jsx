import { ActionCreators } from "../redux/SatisfactionResult";
import * as axios from 'axios';
import config from "../config"

const request = axios.create({
    baseURL: config().api.url,
});

export const getExDis = async (dispatch, satisfactionData) => {
    try {
        //api call
        let { data } = await request.get("/Satisfaction?IDENTITY_ID="+satisfactionData.IDENTITY_ID+"&RESPONSE="+satisfactionData.RESPONSE);
        dispatch(ActionCreators.getExDis(data));
    } catch(e) {
        console.log(e);
    }  
}

export const getDis = async (dispatch, satisfactionData) => {
    try {
        //api call
        let { data } = await request.get("/Satisfaction?IDENTITY_ID="+satisfactionData.IDENTITY_ID+"&RESPONSE="+satisfactionData.RESPONSE);
        dispatch(ActionCreators.getDis(data));
    } catch(e) {
        console.log(e);
    }  
}

export const getNeu = async (dispatch, satisfactionData) => {
    try {
        //api call
        let { data } = await request.get("/Satisfaction?IDENTITY_ID="+satisfactionData.IDENTITY_ID+"&RESPONSE="+satisfactionData.RESPONSE);
        dispatch(ActionCreators.getNeu(data));
    } catch(e) {
        console.log(e);
    }  
}

export const getSat = async (dispatch, satisfactionData) => {
    try {
        //api call
        let { data } = await request.get("/Satisfaction?IDENTITY_ID="+satisfactionData.IDENTITY_ID+"&RESPONSE="+satisfactionData.RESPONSE);
        dispatch(ActionCreators.getSat(data));
    } catch(e) {
        console.log(e);
    }  
}

export const getExSat = async (dispatch, satisfactionData) => {
    try {
        //api call
        let { data } = await request.get("/Satisfaction?IDENTITY_ID="+satisfactionData.IDENTITY_ID+"&RESPONSE="+satisfactionData.RESPONSE);
        dispatch(ActionCreators.getExSat(data));
    } catch(e) {
        console.log(e);
    }  
}