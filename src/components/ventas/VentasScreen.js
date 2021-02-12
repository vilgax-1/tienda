import React from 'react'
import { useSelector } from 'react-redux';
import { VentasCard } from './VentasCard';

export const Ventascreen = (props) => {
    
    const { productsPurchased } =  useSelector(state => state.products);
    
    return (
        <>
            <div className="panelCard">
            {
                productsPurchased.map((data,index) => (
                    <VentasCard key={index} props={data}/>
                )) 
            }
            </div>
        </>
    )
}
