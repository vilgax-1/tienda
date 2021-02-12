import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productSetActive, productsStartBuy, productsLoadPurchased} from '../../actions/productos';
import { uiOpenModal } from '../../actions/ui';


export function Productocard({props}) {
    const dispatch = useDispatch();
    const { uid, type } = useSelector(state => state.auth);

    const modifyProduct = () => {
        dispatch(productSetActive({...props}));
        dispatch(uiOpenModal());
    }

    const buyProduct = async() => {
        dispatch(productsStartBuy(props.id, uid));
    }

    return (
        <div className="card">
            <div className="card__img">
                <img src={props.link} alt="Cover" />
            </div>
            <h5 className="card__name">{ props?.nombre }</h5>
            <div className="card__size">
                <p>{ 
                    (props.tamano === 'M' &&  'Mediana') || 
                    (props.tamano === 'G' &&  'Grande') ||
                    (props.tamano === 'C' &&  'Chica') 
                }</p>
            </div>
            <div className="card__cost">
                <p>${ props.precio }</p>
            </div>
            <button onClick={modifyProduct} className="btn">Modificar</button>
            <button onClick={buyProduct} className="btn">Comprar</button>
        </div>
    )
}