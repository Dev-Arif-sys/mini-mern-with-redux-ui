import axios from 'axios'
import * as actionTypes from '../actionTypes/ProductActionTypes'


export const getProduct=()=>async(dispatch)=>{
     try{
       dispatch({type:actionTypes.GET_PRODUCT_REQUEST})

       const {data}=await axios(`http://localhost:5000/products`)
       console.log(data)
       dispatch({
           type:actionTypes.GET_PRODUCT_SUCCESS,
           payload:data
       })

     }catch(error){
       dispatch({
           type:actionTypes.GET_PRODUCT_FAIL,
           payload:error.response && error.response.data.message ? error.response.data.message :error.message

       })
     }
}


export const getProductDetail=(id)=>async(dispatch)=>{
    try{
      dispatch({type:actionTypes.GET_PRODUCT_DETAIL_REQUEST})

      const {data}=await axios(`http://localhost:5000/products/${id}`)
      dispatch({
          type:actionTypes.GET_PRODUCT_DETAIL_SUCCESS,
          payload:data
      })

    }catch(error){
      dispatch({
          type:actionTypes.GET_PRODUCT_DETAIL_FAIL,
          payload:error.response && error.response.data.message ? error.response.data.message :error.message

      })
    }
}

export const removeProductDetail=()=>(dispatch)=>{
    dispatch({type:actionTypes.GET_PRODUCT_DETAIL_RESET})
}