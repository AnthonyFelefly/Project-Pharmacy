import {createStore, combineReducers,applyMiddleware} from'redux';
import {createForms} from 'react-redux-form';
import {Products} from './products';
import {Categories} from './categories';
import {Users} from './users';
import {UsersTypes} from './usersTypes';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialCategory, InitialMessage,InitialProduct } from './forms';

export const ConfigureStore=()=>{
    const store=createStore(
        combineReducers({
            products:Products,
            categories: Categories,
            users: Users,
            usersTypes: UsersTypes,
            ...createForms({
                message: InitialMessage,
                product: InitialProduct,
                category:InitialCategory
            })

        }),
        applyMiddleware(thunk,logger)
        );
    return store;
};