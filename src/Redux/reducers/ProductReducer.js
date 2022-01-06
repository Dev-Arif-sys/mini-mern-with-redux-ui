import *as actionTypes from '../actionTypes/ProductActionTypes'

export const productReducer=(state={products:[]},action)=>{
       switch(action.type){
           case actionTypes.GET_PRODUCT_REQUEST:return{
               ...state,
               loading:true
           }
           case actionTypes.GET_PRODUCT_SUCCESS:return{
               ...state,
               loading:false,
               products:action.payload
           }
           case actionTypes.GET_PRODUCT_FAIL:return{
               ...state,
               loading:false,
               error:action.payload
           }
           default: return state
       }
           
}

export const productDetailReducer=(state={product:{}},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAIL_REQUEST:return{
            ...state,
            loading:true
        }
        case actionTypes.GET_PRODUCT_DETAIL_SUCCESS: return{
            ...state,
            loading:false,
            product:action.payload

        }
        case actionTypes.GET_PRODUCT_DETAIL_FAIL:return{
            ...state,
            loading:false,
            product:action.payload
        }
        case actionTypes.GET_PRODUCT_DETAIL_RESET:return{
            ...state,
            loading:false,
            product:{}
        }
         

        default: return state
    }
}