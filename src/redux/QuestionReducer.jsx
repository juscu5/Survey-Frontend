const initialState = {
    questions: [],
}

export const ActionTypes = {
    ADD_QUESTIONS: 'ADD_QUESTIONS',
    EDIT_QUESTIONS: 'EDIT_QUESTIONS',
    DELETE_QUESTIONS: 'DELETE_QUESTIONS'
}

export const ActionCreators = {
    addQuestions: payload => ({ 
            type: ActionTypes.ADD_QUESTIONS, payload
        }
    ),
    editQuestions: payload => ({ 
            type: ActionTypes.EDIT_QUESTIONS, payload
        }
    ),
    deleteQuestions: payload => ({ 
            type: ActionTypes.DELETE_QUESTIONS, payload
        }
    ),
}

export default function QuestionsReducer(state = initialState, action) {
    switch (action.type){
        case ActionTypes.ADD_QUESTIONS:
            return {
                ...state, questions: [...action.payload]
            };
        case ActionTypes.EDIT_QUESTIONS:
            return {
                ...state, questions: [...action.payload]
            };
        case ActionTypes.DELETE_QUESTIONS:
            return {
               ...state, questions: [...action.payload]
            };
        default:
            return state;
    }
}