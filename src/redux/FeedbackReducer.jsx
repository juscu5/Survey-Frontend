const initialState = {
    feedback: [],
}

export const ActionTypes = {
    ADD_FEEDBACK: 'ADD_FEEDBACK'
}

export const ActionCreators = {
    addFeedback: payload => ({ 
            type: ActionTypes.ADD_FEEDBACK, payload
        }
    ),
}

export default function FeedbackReducer(state = initialState, action) {
    switch (action.type){
        case ActionTypes.ADD_FEEDBACK:
            return {
                ...state, feedback: [...action.payload]
            };
        default:
            return state;
    }
}