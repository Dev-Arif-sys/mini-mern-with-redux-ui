import * as actionTypes from '../actionTypes/CartActionType'
import axios from 'axios'

export const addToCart=(id,quantity)=>async (dispatch,getState)=>{
      const {data}=await axios(`http://localhost:5000/products/${id}`)

      dispatch({
              type:actionTypes.ADD_TO_CART,
              payload:{
                  id:data._id,
                  title:data.title,
                  price:data.price,
                  desc:data.description,
                  image:data.image,
                  quantity

              }}
      )

      localStorage.setItem('cart',JSON.stringify(getState().cart.CartItem))
  }

export const removeFromCart=(id)=>(dispatch,getState)=>{
    dispatch({
        type:actionTypes.REMOVE_FROM_CART,
        payload:id
    })

    localStorage.setItem('cart',JSON.stringify(getState().cart.CartItem))
}

