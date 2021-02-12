import { types } from "../types/types"
import { finishLoading, setError, startLoading } from "./ui";
import { gsap } from 'gsap';
import { fetchWithoutToken } from "../helpers/fetch";

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

const showError = () => {
    const t1 = gsap.timeline({});
    t1
    .to('#msgError', { yPercent: 265 })
    .to('#msgError', { yPercent: 0 }, '+=1')
}

export const startLoginEmailPassword = (email, password) => { 
    return async(dispatch) => {
        dispatch(startLoading());
            const res = await fetchWithoutToken('login', {email, password }, 'POST');
            const body = await res.json();
            if(body?.error ){
                dispatch(setError('Invalid credentials'));
                showError();
                dispatch(finishLoading());
            }else{
                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime());
                dispatch(login(body.id, body.name, body.token, body.email, body.type ));
                dispatch(finishLoading());
            }
    }
}

export const startRegisterEmailPassword = (email, password, name) =>{
    return async(dispatch) => {
        const res = await fetchWithoutToken('createUser', { email, password, name }, 'POST')
        const body = await res.json();
        if(body.success){
            dispatch(setError('User created'));
            showError();
            dispatch(finishLoading());
        }else if(body.error){
            dispatch(setError('El correo ya ha sido registrado'));
            showError();
            dispatch(finishLoading());            
        }

    }
}

export const login = (uid, displayName, token, email, type) =>{ 
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
            token,
            email,
            type,
        }
    }
};

export const startLogout = () =>{
    return async(dispatch) => {
        localStorage.clear();
        dispatch(logout());
    }
}

export const logout = () =>({
    type: types.logout
});