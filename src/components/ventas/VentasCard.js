import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productStartPay } from '../../actions/productos';

export const VentasCard = ({props}) => {
    
    const { type } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const payProduct = () => {
        dispatch(productStartPay(props));
    }

    return (
        <div className="cardVentas">
            <img className="cardVentas__img" src={props.link}  />
            <div className="cardVentas__content">
                <div className="cardVentas__name">
                    <p>{ props.nombre }</p>       
                </div>
                <div className="cardVentas__cost">
                    <p>Precio: ${ props.precio }</p>
                </div>
                <div className="cardVentas__product">
                    <p>{ props.productnombre }</p>
                </div>
                <div className="cardVentas__size">  
                    <p>Tamaño: { props.tamano }</p>
                </div>
                {
                   props.status ===  'PAGADA' || type !== 'administrador' ? (
                        <button onClick={ payProduct } disabled={ props.status ===  'PAGADA' } className="btn">
                            {
                                props.status === 'PAGADA' ? 'PAGADO' : 'PAGAR' 
                            }
                        </button>
                    ): ''
                }
            </div>
        </div>
    )
}
