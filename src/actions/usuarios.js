import { types } from '../types/types';
import { fetchWithToken } from '../helpers/fetch';

// LOAD USER 

export const userStartLoading = () => {
    return async(dispatch) => {
        try {
            const res = await fetchWithToken('users');
            const body = await res.json();
            dispatch(usersLoaded(body));
        } catch (e) {
            dispatch(usersLoaded([]));
        }
    }
}

const usersLoaded = (users)=> ({
    type: types.usersLoaded,
    payload: users
});