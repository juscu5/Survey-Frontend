const initialState = {
    message: [],
}

export const ActionTypes = {
    NOTIF_MESSAGE: 'NOTIF_MESSAGE',
}

export const ActionCreators = {
    notifMessage: payload => ({ 
            type: ActionTypes.NOTIF_MESSAGE, payload
        }
    ),
}

export default function NotifMessageReducer(state = initialState, action) {
    switch (action.type){
        case ActionTypes.NOTIF_MESSAGE:
            return {
                ...state, message: action.payload
            };
        default:
            return state;
    }
}