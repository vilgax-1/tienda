import { types } from '../types/types';
import { fetchWithToken } from '../helpers/fetch';

export const productStartLoading = () => {
    return async(dispatch) => {
        try {
            const res = await fetchWithToken('products');
            const body = await res.json();
            dispatch(productLoaded(body));
        } catch (e) {
            dispatch(productLoaded([]));
        }
    }
}

export const productStartUpload = (product) => {
    return async(dispatch) => {
        try{
            const res = await fetchWithToken('updateProduct', product, 'PUT');
            const body = await res.json();
            if(body.ok){
                dispatch(productUpdated(product));
            }else{
                console.log('Product not updated');
            }
        }catch(e){
            console.log({error: e});
        }
    }
}

export const productStartPay = (product) => {
    product.status = 'PAGADA';
    return async(dispatch) =>{
        try{
            const res = await fetchWithToken('purchaseproduct' , {id: product.id_compra}, 'PUT');
            const body = await res.json();
            if(body?.ok){
                console.log(product);
                dispatch(payProduct(product))
            }else{
                console.log('Product not buyed');
            }
        }catch(e){
            console.log('Something went wrong with the pay', e);
        }
    }
}

export const productStartAddNew = (product) => {
    return async(dispatch) =>{
        try{
            const t1 = await fetchWithToken('product', product, 'POST');
            const body = await t1.json();
            if(body.ok){
                dispatch(productAddNew(body))
            }else{
                console.log('Something went wrong');    
            }
        }catch(e){
            console.log('Something went wrong');
        }
    }
}

export const productsStartBuy = (productId, usuarioId) => {
    return async(dispatch)=>{
        try{
            const result = await fetchWithToken('buy', { productId, usuarioId }, 'POST');
            const body = await result.json();
        }catch(e){
            console.log('Something went wrong');
        }
    }
}

export const productsLoadPurchased = (id, type) =>{
    return async(dispatch)=>{
        try{
            const res = await fetchWithToken('purchased', {id, type} ,'POST'); 
            const body = await res.json();
            if(body.ok){
                dispatch(productsPurchased(body.products));
            }
        }catch(e){
            console.log('Something went wrong');
        }
    }
}



export const productLoaded = (product)=> ({
    type: types.productLoaded,
    payload: [...product]
});

export const productAddNew = (product) => ({
    type: types.productAddNew,
    payload: product
});

export const productSetActive = (product) => ({
    type: types.productSetActive,
    payload: product
});

export const productoClearSetActive = () => ({
    type: types.productClearActive
})

export const productUpdated = (product) => ({
    type:  types.productUpdate,
    payload: product
});

export const productsPurchased = (products) => ({
    type: types.purchasesLoaded,
    payload: products
}) 

export const payProduct = (product) => ({
    type: types.productBuyLoaded,
    payload: product
});