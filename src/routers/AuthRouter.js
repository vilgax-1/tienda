import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { Registerscreen } from '../components/auth/RegisterScreen';
import story1 from '../assets/img/story-1.jpeg';
import { useSelector } from 'react-redux';


export const Authrouter = (props) =>{
    const { msgError } = useSelector(state => state.ui);
    
    return (
        <div className="auth">
            <div className="auth__card">
                <div className="error" id="msgError">
                    <p> { msgError || '' }</p>
                </div>
                <Switch>
                        <Route exact  path="/auth/login" component={ LoginScreen }/>
                        <Route exact  path="/auth/register" component={ Registerscreen }/>
                        <Redirect to="/auth/login" />
                </Switch>
            </div>
        </div>
    )
}
