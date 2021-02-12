import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Authrouter } from './AuthRouter';
import { Storescreen  } from '../components/store/StoreScreen';
import { useDispatch, useSelector } from 'react-redux';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = (props) =>{
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.auth);
    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth" 
                        component={ Authrouter } 
                        isAuthenticated={ !!token }
                    />
                    <PrivateRoute 
                        path="/" 
                        component={ Storescreen } 
                        isAuthenticated= { !!token }
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
