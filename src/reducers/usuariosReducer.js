import { types  } from '../types/types';

const initialState = {
    users: [],
}


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.usersLoaded:
            return {
                ...state,
                users: [ ...action.payload ]
            }
        default:
            return state;
    }
}