import React,  { useEffect } from 'react'
import { Storerouter } from '../../routers/StoreRouter';
import { Sidebar } from './Sidebar';
import logo from '../../assets/img/logo.png';
import bbc from '../../assets/img/logo-bbc.png'
import forbes from '../../assets/img/logo-forbes.png'
import techcrunch from '../../assets/img/logo-techcrunch.png'
import bi from '../../assets/img/logo-bi.png'
import { useDispatch, useSelector } from 'react-redux';
import { userStartLoading } from '../../actions/usuarios';
import { productStartLoading, productsLoadPurchased } from '../../actions/productos';

export const Storescreen = (props) => {
    const dispatch = useDispatch();
    const { type, uid } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch( userStartLoading() );
        dispatch( productStartLoading() );    
        dispatch( productsLoadPurchased(uid, type));
    }, []);
    
    return (
        <div className="content">
            <Sidebar />
            <main>
                <div className="header">
                <img src={logo} alt="Nexter logo" className="header__logo" />
                <h3 className="heading-3">Your own store:</h3>
                <h1 className="heading-1">The ultimate personal freedom</h1>
                <div className="header__seenon-text">Seen on</div>
                <div className="header__seenon-logos">
                <img src={bbc} alt="Seen on logo 1" />
                <img src={forbes} alt="Seen on logo 2" />
                <img src={techcrunch} alt="Seen on logo 3" />
                <img src={bi} alt="Seen on logo 4" />
            </div>
                </div>
                <div className="container">
                    <Storerouter />
                </div>
            </main>
        </div>
    )
}
