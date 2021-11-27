import {PRODUCTS} from '../shared/products.js';
import { CATEGORIES } from '../shared/categories';

export const initialState={
    products:PRODUCTS,
    categories:CATEGORIES,
};
export const Reducer=(state=initialState, action)=>{
    return state;
};