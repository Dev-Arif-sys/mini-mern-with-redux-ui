import * as actionTypes from '../actionTypes/CartActionType'

const InitialCart=localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') ):[]
const cartReducer=(state={CartItem:InitialCart},action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item=action.payload

            const existItem=state.CartItem.find(x=>x.id===item.id)

            if(existItem){
                return{
                    ...state,
                    CartItem: state.CartItem.map(x=>x.id===existItem.id ? item :x )
                }
            }else{
                return{
                    ...state,
                    CartItem:[...state.CartItem,item]
                }
            }
        case actionTypes.REMOVE_FROM_CART: 
        
        return{
          ...state,
          CartItem:state.CartItem.filter(x=>x.id!==action.payload)
        }

        default: return state

    }
}

export default cartReducer