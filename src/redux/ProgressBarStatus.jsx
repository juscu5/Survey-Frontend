const initialState = {
    progress: [0],
}

export const ActionTypes = {
    PROGRESS_BAR: 'PROGRESS_BAR',
}

export const ActionCreators = {
    progressBar: payload => ({ 
            type: ActionTypes.PROGRESS_BAR, payload
        }
    ),
}

export default function ProgressBarReducer(state = initialState, action) {
    switch (action.type){
        case ActionTypes.PROGRESS_BAR:
            return {
                ...state, progress: action.payload
            };
        default:
            return state;
    }
}