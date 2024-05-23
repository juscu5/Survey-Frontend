const initialState = {
    survey: [],
}

export const ActionTypes = {
    ADD_IDENTITY: 'ADD_IDENTITY',
    ADD_ANSWER: 'ADD_ANSWER'
}

export const ActionCreators = {
    addIdentity: payload => ({ 
            type: ActionTypes.ADD_IDENTITY, payload
        }
    ),
    addAnswer: payload => ({ 
            type: ActionTypes.ADD_ANSWER, payload
        }
    ),
}

export default function SurveyReducer(state = initialState, action) {
    switch (action.type){
        case ActionTypes.ADD_IDENTITY:
            return {
                ...state, survey: [...action.payload]
            };
        case ActionTypes.ADD_ANSWER:
            return {
                ...state, survey: [...action.payload]
            };
        default:
            return state;
    }
}