import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import  validator from 'validator';
import { useDispatch, useSelector} from 'react-redux';
import { setError, removeError } from '../../actions/ui';
import { gsap } from 'gsap';
import { startRegisterEmailPassword } from '../../actions/auth';

const showError = () => {
    const t1 = gsap.timeline({});
    t1
    .to('#msgError', { yPercent: 265 })
    .to('#msgError', { yPercent: 0 }, '+=1')
}

export const Registerscreen = (props) =>{

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui);

    const [formValues, handleInputChange ] = useForm({
        name: 'martin hernandez', 
        email: 'ratedstark@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = async(e)=>{
        e.preventDefault();
        if(isFormValid()){
            await dispatch(startRegisterEmailPassword(email, password, name));
        }
    }
    
    const isFormValid = () =>{
        if( name.trim().length === 0 ){
            dispatch(setError('Name is required'));
            showError()
            return false;
        }else if(!validator.isEmail(email)){
            dispatch(setError('Email is not valid'));
            showError()
            return false;
        }else if(password !== password2 || password.length < 5){
            dispatch(setError('Password should be at least 6 characters'));
            showError()
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <>
        <form onSubmit={handleRegister}>
            <div className="auth__box">
                <label className="text-control">Nombre</label>
                <input type="text" name="name" className="form-control" value={name}  onChange={handleInputChange} />
            </div>
            <div className="auth__box">
                <label className="text-control">Correo</label>
                <input type="text" name="email" className="form-control" value={email} onChange={handleInputChange}  />
            </div>
            <div className="auth__box">
                <label className="text-control">Contraseña</label>
                <input type="password" name="password" className="form-control" value={password} onChange={handleInputChange} />
            </div>
            <div className="auth__box">
                <label className="text-control">Confirmar Contraseña</label>
                <input type="password" name="password2" className="form-control" value={password2} onChange={handleInputChange} />
            </div>
            <button type="submit" className="btn auth__btn">Registrar</button>
            <div className="auth__footer">
                <Link to="/auth/login">
                    ¿Ya tienes cuenta?
                </Link>
            </div>
        </form>
        </>
    )
}
