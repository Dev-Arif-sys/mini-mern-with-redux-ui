import React from 'react';
import CartItem from './CartItem';
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../Redux/actions/CartActions';

const Cart = () => {
    const cartItem=useSelector(state=>state.cart.CartItem)
      const totalPrice=cartItem.reduce((price,item)=> price+ (item.quantity*item.price),0)
    
      const dispatch=useDispatch()
      const handleQuantityChange=(id,quantity)=>{
                dispatch(addToCart(id,quantity))
      }
      const removeItemFromCart=(id)=>{
          dispatch(removeFromCart(id))
      }
    return (
        <div className='cart d-flex justify-content-around'>
            <div className='cart-left me-4'>
                {
                    cartItem?.map(item=> <CartItem
                     item={item}
                     handleQuantityChange={handleQuantityChange}
                     removeItemFromCart={removeItemFromCart}
                    ></CartItem>
                    )
                }
            
            </div>
               
            
            <div className=' cart-right '>
               <p>Sub Total</p>
               <p className='sub-price'>main: ${totalPrice}</p>

               <p>total:${totalPrice}</p>
            </div>
        </div>
    );
};

export default Cart;