import { types } from '../types/types';

export const authReducer = (state = {}, action) =>{
    switch(action.type){
        case types.login:
        return {
            uid: action.payload.uid,
            name: action.payload.displayName,
            email: action.payload.email,
            token: action.payload.token,
            cheking: false,
            type: action.payload.type
        }
        case types.logout: 
        return {}
        default: 
            return state;
    }
}