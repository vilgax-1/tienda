import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Sidebar = (props) => {    
    const { type } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(startLogout());
    }
    
    return (
        <nav className="sidebar">
            <ul className="side-nav">
                {
                    type === 'administrador' ? (
                        <li className="side-nav__item">
                         <Link to="/usuarios" className="side-nav__link">
                             Usuarios
                         </Link>
                         </li>
                    ) : ''
                }
                <li className="side-nav__item">
                    <Link to="/productos" className="side-nav__link">
                        Productos
                    </Link>
                </li>
                <li className="side-nav__item">
                    <Link to="/ventas" className="side-nav__link">
                        Ordenes de compra
                    </Link>
                </li>
                <li className="side-nav__item">
                    <Link className="side-nav__link" onClick={ handleLogout }>
                        Logout
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
