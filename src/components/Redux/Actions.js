// Actions and reducers
import { combineReducers } from 'redux';
// ACTIONS
const ADD_PROGRAMMER = 'ADD_PROGRAMMER';
const INCREMENT_PROGRAMMER = 'INCREMENT_PROGRAMMER';

export const addProgrammer = (programmer) => {
    return {
        type: ADD_PROGRAMMER,
        programmer,
    };
}

export function incrementProgrammer(programmer) {
    return {
        type: INCREMENT_PROGRAMMER,
        programmer
    };
}
// Reducers


const defaultProgrammers = [
    {
        name: 'xessive',
        views: 1,
    }
]

const programmers = (state = defaultProgrammers, action) => {
    switch (action.type) {
        case ADD_PROGRAMMER:
            return [
                ...state,
                {
                    name: action.programmer,
                    views: 1
                }
            ];


        case INCREMENT_PROGRAMMER:
            const programmer = state.find(p => action.programmer === p.name);
            const programmers = state.filter(p => action.programmer !== p.name);
            return [
                ...programmers,
                {
                    ...programmer,
                    views: programmer.views + 1
                    }
            ];

        default:
            return state;
    }


}

const programmerApp = combineReducers({
    programmers
    
    });
export default programmerApp;