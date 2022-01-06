import React from 'react';
import './CartItem.css'

const CartItem = ({item,handleQuantityChange,removeItemFromCart}) => {
    

    return (
        <div className='cart-item'>
            <div>
            <img src={item.image} />
            </div>
           
            <p className='product-name'>{item.title}</p>
            <p className='text-danger fw-bold'>${item.price}</p>
            
            <div>
            <input type='number'onChange={(e)=>handleQuantityChange(item.id,e.target.value)} defaultValue={item.quantity}/>
            </div>
          
            <p onClick={()=>removeItemFromCart(item.id)} className='text-center'>X</p>
            
            
        </div>
    );
};

export default CartItem;