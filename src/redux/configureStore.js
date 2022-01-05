import {createStore, combineReducers,applyMiddleware} from'redux';
import {createForms} from 'react-redux-form';
import {Products} from './products';
import {Categories} from './categories';
import {Users} from './users';
import {UsersTypes} from './usersTypes';
import { Messages } from './messages';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { InitialAddCategory, InitialDeleteCategory, InitialMessage,InitialAddProduct, InitialDeleteProduct, InitialUserUp } from './forms';


export const ConfigureStore=()=>{
    const store=createStore(
        combineReducers({
            products:Products,
            categories: Categories,
            users: Users,
            usersTypes: UsersTypes,
            messages:Messages,
            
            ...createForms({
                message: InitialMessage,
                product: InitialAddProduct,
                category:InitialAddCategory,
                dcategory:InitialDeleteCategory,
                dproduct:InitialDeleteProduct,
                signup:InitialUserUp
            })

        }),
        applyMiddleware(thunk,logger)
        );
    return store;
};