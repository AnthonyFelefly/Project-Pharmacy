import * as ActionTypes from './ActionTypes';
import {baseUrl} from "../shared/baseUrl";

//PRODUCT FUNCTIONS
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



//CATEGORY FUNCTIONS
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
    .catch(error=>{ console.log("Post Category ",error.message);
            alert("Your Category could not be added\nError: "+error.message);});
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

//CART FUNCTIONS
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

//MESSAGES FUNCTIONS

export const fetchMessages=()=>(dispatch)=>{
    dispatch(messagesLoading(true));
   return fetch(baseUrl+"messages")
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
   .then(messages=>dispatch(addMessages(messages)))
   .catch(error=>dispatch(messagesFailed(error.message)));


}


export const messagesLoading=()=>({
    type: ActionTypes.MESSAGES_LOADING
});

export const messagesFailed=(errmess)=>({
    type:ActionTypes.MESSAGES_FAILED,
    payload:errmess
});
export const addMessages=(messages)=>({
    type: ActionTypes.ADD_MESSAGES,
    payload:messages
});

export const addMessage=(message)=>({
    type:ActionTypes.ADD_MESSAGE,
    payload:message
});
export const postMessage=(firstName,lastName,telnum,email,flag,contactMethod,message)=>(dispatch)=>{
    const newMessage={
            firstName:firstName,
            lastName:lastName,
            telnum:telnum,
            email:email,
            flag:flag,
            contactMethod:contactMethod,
            message:message
    };
    newMessage.date = new Date().toDateString();
    return fetch(baseUrl+'messages',{
        method:'POST',
        body: JSON.stringify(newMessage),
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
    .then(response=>{dispatch(addMessage(response))})
    .catch(error=>{ console.log("Post Message ",error.message);
            alert("Your Message could not be sent\nError: "+error.message);});
}
export const deleteMessage=(messageId)=>(dispatch)=>{
    return fetch(baseUrl+'messages/'+messageId,{
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
    .then(response=>{dispatch(fetchMessages())})
    .catch(error=>{ console.log("Delete Message ",error.message);
            alert("This Message could not be deleted\nError: "+error.message);});
}


//USERS FUNCTIONS


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
export const postUser=(firstName,lastName,password,email,telnum,dateOfBirth)=>(dispatch)=>{
    const newUser={
            firstName:firstName,
            lastName:lastName,
            password:password,
            email:email,
            telnum:telnum,
            dateOfBirth:dateOfBirth,
    };
    newUser.type = 0;
    newUser.dateOfDelete=null;
    return fetch(baseUrl+'users',{
        method:'POST',
        body: JSON.stringify(newUser),
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
    .then(user=>{dispatch(addUser(user));dispatch(login(user))})
    .catch(error=>{ console.log("Sign up ",error.message);
            alert("You couldn't Sign up\nError: "+error.message);});
}
export const addUser=(user)=>({
    type:ActionTypes.ADD_USER,
    payload:user
});


export const login=(user)=>({
    type:ActionTypes.LOGIN,
    payload:user
});
export const logout=()=>({
    type:ActionTypes.LOGOUT
});