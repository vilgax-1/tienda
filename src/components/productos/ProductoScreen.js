import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Productocard } from './ProductoCard';
import { ProductoModal  } from './ProductoModal';
import { uiOpenModal } from '../../actions/ui';

export const Productoscreen = (props) => {
    const { products } = useSelector(data => data.products);
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch(uiOpenModal());
    }   

    return (
        <>
            <ProductoModal />
            <button className="btn" onClick={ openModal }>Nuevo producto</button>
            <div className="container-users">
                {
                    products.map((value, index) => (
                        <Productocard key={ index } props={value} />
                    ))
                }
            </div>
        </>
    )
}
