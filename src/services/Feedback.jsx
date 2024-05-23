import { ActionCreators } from "../redux/FeedbackReducer";
import * as axios from 'axios';
import config from "../config"

const request = axios.create({
    baseURL: config().api.url,
});

//Adding Questions 
export const addFeedback = async (dispatch, newData) => {
    try {
        //api call
        let { data } = await request.post("/Feedback", newData);
        dispatch(ActionCreators.addFeedback(data));
    } catch {
        console.log("Error!");
    }  
}