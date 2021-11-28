import {createStore, combineReducers} from'redux';
import {Products} from './products';
import {Categories} from './categories';
import {Users} from './users';
import {UsersTypes} from './usersTypes';

export const ConfigureStore=()=>{
    const store=createStore(
        combineReducers({
            products:Products,
            categories: Categories,
            users: Users,
            usersTypes: UsersTypes

        })
        );
    return store;
};