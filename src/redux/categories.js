import * as ActionTypes from './ActionTypes';
export const Categories=(state={
    isLoading:true,
    errMess:null,
    categories:[]
}, action)=>{
    switch(action.type){
        case ActionTypes.ADD_CATEGORY:
            var category=action.payload;
            category.id=state.categories.length;
            console.log(state.categories);
            return {...state,isLoading:false,errMess:null,categories:state.categories.concat(category)}
        case ActionTypes.ADD_CATEGORIES:
            return {...state,isLoading:false,errMess:null,categories:action.payload};

        case ActionTypes.CATEGORIES_LOADING:
            return {...state,isLoading:true,errMess:null,categories:[]};

        case ActionTypes.CATEGORIES_FAILED:
            return {...state,isLoading:false,errMess:action.payload,categories:[]};
        default:
            return state;
    }
}