import {createStore, combineReducers,applyMiddleware} from'redux';
import {createForms} from 'react-redux-form';
import {Products} from './products';
import {Categories} from './categories';
import {Users} from './users';
import {UsersTypes} from './usersTypes';
import { Messages } from './messages';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialAddCategory, InitialDeleteCategory, InitialMessage,InitialAddProduct, 
    InitialDeleteProduct, InitialSignUp, InitialSignIn, InitialCheckout,  } from './forms';
import { Auth } from './auth';
import { Orders } from './orders';


export const ConfigureStore=()=>{
    const store=createStore(
        combineReducers({
            products:Products,
            categories: Categories,
            users: Users,
            usersTypes: UsersTypes,
            messages:Messages,
            auth:Auth,
            orders:Orders,
            
            ...createForms({
                message: InitialMessage,
                product: InitialAddProduct,
                category:InitialAddCategory,
                dcategory:InitialDeleteCategory,
                dproduct:InitialDeleteProduct,
                signup:InitialSignUp,
                signin:InitialSignIn,
                checkout:InitialCheckout
            })

        }),
        applyMiddleware(thunk,logger)
        );
    return store;
};