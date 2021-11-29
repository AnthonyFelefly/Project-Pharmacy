import * as ActionTypes from './ActionTypes';
import {PRODUCTS} from '../shared/products.js';
export const addProduct=(productName,category,description,application,quantity,price)=>({
    type:ActionTypes.ADD_PRODUCT,
    payload:{
        name:productName,
        category:category,
        description:description,
        application:application,
        quantity:quantity,
        price:price+"$"

    }
});

export const fetchProducts=()=>(dispatch)=>{
    dispatch(productsLoading(true));
    setTimeout(()=>{
        dispatch(addProducts(PRODUCTS));
    },2000);
    
}

export const productsLoading=()=>({
    type: ActionTypes.PRODUCTS_LOADING
});

export const productsFailed=(errmess)=>({
    type:ActionTypes.PRODUCTS_FAILED,
    payload:errmess
});
export const addProducts=(products)=>({
    type: ActionTypes.ADD_PRODUCTS,
    payload:products
});
