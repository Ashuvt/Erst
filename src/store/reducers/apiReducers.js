import {
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_FAIL,
    
    REMOVE_CART_REQUEST,
    REMOVE_CART_SUCCESS,
    REMOVE_CART_FAIL,

    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,

    EXPLORE_DETAIL_REQUEST,
    EXPLORE_DETAIL_SUCCESS,
    EXPLORE_DETAIL_FAIL,

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

export const addCartReducer = (state={},action)=>{
    switch(action.type){
        case ADD_TO_CART_REQUEST:
            return {loading:true};
        case ADD_TO_CART_SUCCESS:
            return {loading:false}
        case ADD_TO_CART_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const getExploreDetailByIdApi = (state={},action)=>{
    switch(action.type){
        case EXPLORE_DETAIL_REQUEST:
            return {courseDetailLoading:true};
        case EXPLORE_DETAIL_SUCCESS:
            return {courseDetailLoading:false, courseDetailData:action.payload}
        case EXPLORE_DETAIL_FAIL:
            return {courseDetailLoading:false,courseDetailError:action.payload}
        default:
            return state;
    }
}