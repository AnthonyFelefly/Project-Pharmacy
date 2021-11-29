
import * as ActionTypes from'./ActionTypes';


export const Products=(state={
    isLoading:true,
    errMess:null,
    products:[]
}, action)=>{
    switch(action.type){
        case ActionTypes.ADD_PRODUCT:
            var product=action.payload;
            product.id=state.products.length;
            console.log(product);
            return {...state,isLoading:false,errMess:null,products:state.products.concat(product)}
        case ActionTypes.ADD_PRODUCTS:
            return {...state,isLoading:false,errMess:null,products:action.payload};

        case ActionTypes.PRODUCTS_LOADING:
            return {...state,isLoading:true,errMess:null,products:[]};

        case ActionTypes.PRODUCTS_FAILED:
            return {...state,isLoading:false,errMess:action.payload,products:[]};
        default:
            return state;
    }
}