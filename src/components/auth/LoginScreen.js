import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm'
import { gsap } from 'gsap';
import  validator from 'validator';
import { setError, removeError } from '../../actions/ui';

const showError = () => {
    const t1 = gsap.timeline({});
    t1
    .to('#msgError', { yPercent: 265 })
    .to('#msgError', { yPercent: 0 }, '+=1')
}

export const LoginScreen = (props) =>{    
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui);
   
    const [ formValues, handleInputChange ] = useForm({
        email: 'ratedstark@gmail.com',
        password: '123456',
    });

    const { email, password } = formValues;
    
    const handleLogin = (e) => {
        e.preventDefault();
        if(isFormValid()){
            dispatch(startLoginEmailPassword(email, password));
        }
    }

    const isFormValid = () =>{
        if(!validator.isEmail(email)){
            dispatch(setError('Email is not valid'));
            showError();
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <form onSubmit={ handleLogin } >
            <div className="auth__box">
                <label className="text-control">Correo</label>
                <input type="text" name="email" className="form-control" value={email} onChange={ handleInputChange }/>
            </div>
            <div className="auth__box">
                <label className="text-control">Password</label>
                <input type="password" name="password" className="form-control" value={ password } onChange={ handleInputChange } />
            </div>
            <button type="submit" className="btn auth__btn" disabled={loading}>Iniciar Sesión</button>
            <div className="auth__footer">
                <Link to="/auth/register">
                    Crear una nueva cuenta
                </Link>
            </div>
        </form>
    )
}
