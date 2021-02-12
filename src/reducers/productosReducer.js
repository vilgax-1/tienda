import { types  } from '../types/types';

const initialState = {
    products: [],
    productsPurchased: [],
    activeProduct: null
}


export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.productLoaded:
            return {
                ...state,
                products: action.payload
            }
        case types.productSetActive:
            return { 
                ...state,
                activeProduct: action.payload
            }
        case types.productAddNew: 
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ]
            }

        case types.productClearActive: 
            return {
                ...state,
                activeProduct: null   
            }

        case types.productUpdate:
            return {
                ...state,
                products: state.products.map(product => (product.id === action.payload.id ) ? action.payload : product)   
            }
        case types.purchasesLoaded: 
            return {
                ...state,
                productsPurchased: [...action.payload]
            }
        case types.productBuyLoaded: 
            return {
                ...state,
                productsPurchased: state.productsPurchased.map(p => (p.id_compra === action.payload.id_compra) ? action.payload : p)
            }
        default:
            return state;
    }
}