import {
    GET_SAVED_LIST_REQUEST,
    GET_SAVED_LIST_SUCCESS,
    GET_SAVED_LIST_FAIL,
  } from "../apiConsts";


  export const getSavedCourseReducer = (state={},action)=>{
    switch(action.type){
        case GET_SAVED_LIST_REQUEST:
            return {loading:true};
        case GET_SAVED_LIST_SUCCESS:
            return {loading:false,payload:action.payload}
        case GET_SAVED_LIST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}