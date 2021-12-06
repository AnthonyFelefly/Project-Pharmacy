import * as ActionTypes from './ActionTypes';
import {baseUrl} from "../shared/baseUrl";
export const addProduct=(product)=>({
    type:ActionTypes.ADD_PRODUCT,
    payload:product
});
export const postProduct=(productName,category,description,application,quantity,price,image)=>(dispatch)=>{
    const newProduct={
            name:productName,
            category:category,
            description:description,
            image:image,
            application:application,
            quantity:quantity,
            price:price
    };
    return fetch(baseUrl+'products',{
        method:'POST',
        body: JSON.stringify(newProduct),
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'same-origin'
    }).then(response=>{
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
    }) .then(response=>response.json())
    .then(response=>{dispatch(addProduct(response));console.log(response)})
    .catch(error=>{ console.log("Post Products ",error.message);
            alert("Your Product could not be added\nError: "+error.message);});
}
export const deleteProduct=(productId)=>(dispatch)=>{
    return fetch(baseUrl+'products/'+productId,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'same-origin'
    }).then(response=>{
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
    }) .then(response=>response.json())
    .then(response=>{dispatch(fetchProducts())})
    .catch(error=>{ console.log("Delete Products ",error.message);
            alert("Your Product could not be deleted\nError: "+error.message);});
}
export const deleteCategory=(categoryId)=>(dispatch)=>{
    return fetch(baseUrl+'categories/'+categoryId,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'same-origin'
    }).then(response=>{
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
    }) .then(response=>response.json())
    .then(response=>{dispatch(fetchCategories())})
    .catch(error=>{ console.log("Delete Categories ",error.message);
            alert("This Category could not be deleted\nError: "+error.message);});
}





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
export const addCategory=(category)=>({
    type:ActionTypes.ADD_CATEGORY,
    payload:category
});
export const postCategory=(categoryName)=>(dispatch)=>{
    const newCategory={
      description:categoryName
    };
    return fetch(baseUrl+"categories",{
        method:'POST',
        body: JSON.stringify(newCategory),
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'same-origin'
    }).then(response=>{
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
    }) .then(response=>response.json())
    .then(response=>dispatch(addCategory(response)))
    .catch(error=>{ console.log("Post Products ",error.message);
            alert("Your Product could not be added\nError: "+error.message);});
}

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


export const loginRequest=(idUser)=>({
    type:ActionTypes.LOGIN_REQUEST,
    payload:idUser
});




export const addToCart=(productId)=>({
    type:ActionTypes.ADD_TO_CART,
    payload:{
        productId:productId
    }

})
export const removeFromCart=(productId)=>({
    type:ActionTypes.REMOVE_FROM_CART,
    payload:{
        productId:productId
    }

})
export const adjust_qty=(productId,value)=>({
    type:ActionTypes.ADJUST_QTY_CART,
    payload:{
        productId:productId,
        quantity:value
    }

})
export const loadCurrentItem=(product)=>({
    type:ActionTypes.LOAD_CURRENT_ITEM,
    payload:product
});