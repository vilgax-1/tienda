import React from 'react'
import cover from '../../assets/img/sale-clothes-shopping-retail.jpg';


export const Usuariocard = ( {props}) => {
    return (
        <div className="card">
            <div className="card__img">
                <img src={ cover } />
            </div>
            <h5 className="card__name">{ props?.nombre }</h5>
            <div className="card__email">
                <p>{ props.correo }</p>
            </div>
            <div className="card__id">
                <p>{ props.id }</p>
            </div>
            <button className="btn card__btn">Ver Detalles</button>
        </div>
    )
}
