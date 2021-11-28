import * as ActionTypes from './ActionTypes';

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