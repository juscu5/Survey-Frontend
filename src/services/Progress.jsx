import { ActionCreators } from "../redux/ProgressBarStatus";

//Progress Status
export const progressBar = async (dispatch, notif) => {
    try {
        if(notif > 100 | notif > 95){
            notif = 100;
            dispatch(ActionCreators.progressBar(notif));
        }
        else{
            dispatch(ActionCreators.progressBar(notif));
        }
    } catch (e){
        console.log(e);
    }  
}