import { ActionCreators } from "../redux/QuestionReducer";
import * as axios from 'axios';
import config from "../config"

const request = axios.create({
    baseURL: config().api.url,
});

//Adding Questions 
export const addQuestions = async (dispatch, newData) => {
    try {
        //api call
        let { data } = await request.post("/Survey", newData);
        dispatch(ActionCreators.addQuestions(data));
    } catch {
        console.log("Error!");
    }  
}

//Deleing Questions
export const deleteQuestions = async (dispatch, id) => {
    try {
        //api call
        let { data } = await request.delete("/Survey/" + id);
        dispatch(ActionCreators.deleteQuestions(data));
    } catch {
        console.log("Error!");
    }  
}

//EditingQuestions
export const editQuestions = async (dispatch, editedData) => {
    try {
        //api call
        let { data } = await request.put("/Survey",editedData);
        dispatch(ActionCreators.editQuestions(data));
    } catch (e) {
        console.log(e);
    }  
}