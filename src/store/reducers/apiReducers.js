import {
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_FAIL,
    
    REMOVE_CART_REQUEST,
    REMOVE_CART_SUCCESS,
    REMOVE_CART_FAIL,

  } from "../apiConsts";


export const getCartReducer = (state={},action)=>{
    switch(action.type){
        case GET_CART_REQUEST:
            return {loading:true};
        case GET_CART_SUCCESS:
            return {loading:false, cartData:action.payload}
        case GET_CART_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}




export const removeFromCartReducer = (state={},action)=>{
    switch(action.type){
        case REMOVE_CART_REQUEST:
            return {loading:true};
        case REMOVE_CART_SUCCESS:
            return {loading:false, cartData:action.payload}
        case REMOVE_CART_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}