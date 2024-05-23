const initialState = {
    exDissatisfied: [],
    dissatisfied: [],
    neutral: [],
    satisfied: [],
    exSatisfied: []
}

export const ActionTypes = {
    GET_EXDIS: 'GET_EXDIS',
    GET_DIS: 'GET_DIS',
    GET_NEU: 'GET_NEU',
    GET_SAT: 'GET_SAT',
    GET_EXSAT: 'GET_EXSAT'
}

export const ActionCreators = {
    getExDis: payload => ({ 
            type: ActionTypes.GET_EXDIS, payload
        }
    ),
    getDis: payload => ({ 
            type: ActionTypes.GET_DIS, payload
        }
    ),
    getNeu: payload => ({ 
        type: ActionTypes.GET_NEU, payload
        }
    ),
    getSat: payload => ({ 
        type: ActionTypes.GET_SAT, payload
        }
    ),
    getExSat: payload => ({ 
        type: ActionTypes.GET_EXSAT, payload
        }
    ),
}

export default function SatisfactionResult(state = initialState, action) {
    switch (action.type){
        case ActionTypes.GET_EXDIS:
            return {
                ...state, exDissatisfied: [...action.payload]
            };
        case ActionTypes.GET_DIS:
            return {
                ...state, dissatisfied: [...action.payload]
        };
        case ActionTypes.GET_NEU:
            return {
                ...state, neutral: [...action.payload]
        };
        case ActionTypes.GET_SAT:
            return {
                ...state, satisfied: [...action.payload]
        };
        case ActionTypes.GET_EXSAT:
            return {
                ...state, exSatisfied: [...action.payload]
        };
        default:
            return state;
    }
}