import { ActionCreators } from "../redux/NotifMessageReducer";

//Notification Message
export const messageNotif = async (dispatch, notif) => {
    try {
        //message
        const message = {
            status: notif.notifStatus,
            message: notif.notifMessage
        }
        dispatch(ActionCreators.notifMessage(message));
    } catch (e){
        console.log(e);
    }  
}