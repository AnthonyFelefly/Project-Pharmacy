import * as ActionTypes from './ActionTypes';
import {baseUrl} from "../shared/baseUrl";
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
export const addCategory=(description)=>({
    type:ActionTypes.ADD_CATEGORY,
    payload:{
        description:description,

    }
});

export const fetchProducts=()=>(dispatch)=>{
    dispatch(productsLoading(true));
   return fetch(baseUrl+"products")
   .then(response=>{
       if(response.ok){
           return response;
       }else{
           var error=new Error('Error '+response.status+': '+response.statusText);
            error.response=response;
            throw error;
        }
   },
   error=>{
       var errmess=new Error(error.message);
       throw errmess;
   })
   .then(response=>response.json())
   .then(products=>dispatch(addProducts(products)))
   .catch(error=>dispatch(productsFailed(error.message)));


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

export const fetchCategories=()=>(dispatch)=>{
    dispatch(categoriesLoading(true));
   return fetch(baseUrl+"categories")
   .then(response=>{
    if(response.ok){
        return response;
    }else{
        var error=new Error('Error '+response.status+': '+response.statusText);
         error.response=response;
         throw error;
     }
},
error=>{
    var errmess=new Error(error.message);
    throw errmess;
})
   .then(response=>response.json())
   .then(categories=>dispatch(addCategories(categories)))
   .catch(error=>dispatch(categoriesFailed(error.message)));
;
    
}
export const categoriesLoading=()=>({
    type: ActionTypes.CATEGORIES_LOADING
});
export const categoriesFailed=(errmess)=>({
    type:ActionTypes.CATEGORIES_FAILED,
    payload:errmess
});
export const addCategories=(categories)=>({
    type: ActionTypes.ADD_CATEGORIES,
    payload:categories
});

export const fetchUsers=()=>(dispatch)=>{
    dispatch(usersLoading(true));
   return fetch(baseUrl+"users")
   .then(response=>{
    if(response.ok){
        return response;
    }else{
        var error=new Error('Error '+response.status+': '+response.statusText);
         error.response=response;
         throw error;
     }
},
error=>{
    var errmess=new Error(error.message);
    throw errmess;
})
   .then(response=>response.json())
   .then(users=>dispatch(addUsers(users)))
   .catch(error=>dispatch(usersFailed(error.message)));
;
    
}


export const usersLoading=()=>({
    type: ActionTypes.USERS_LOADING
});

export const usersFailed=(errmess)=>({
    type:ActionTypes.USERS_FAILED,
    payload:errmess
});
export const addUsers=(users)=>({
    type: ActionTypes.ADD_USERS,
    payload:users
});