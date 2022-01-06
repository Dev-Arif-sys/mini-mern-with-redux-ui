import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../Redux/actions/ProductActions';
import './ProductDetail.css'
import { addToCart } from '../../Redux/actions/CartActions';

const ProductDetail = () => {
    const {id}=useParams()
    const productData=useSelector(state=>state.productDetail)
    const [quantity,setQuantity]=useState(1)
    const {product,loading,error}=productData
    const dispatch=useDispatch()
    console.log(product)
    useEffect(()=>{
      dispatch(getProductDetail(id))
    },[])
    console.log(quantity)

    const handleCartClick=(id)=>{
      dispatch(addToCart(id,quantity))
    }
    return (
        <div className='product-detail'>
            <h3>Product Features</h3>
        <div className=' d-flex align-items-center'>
            <div className='product-image'> <img src={product.image}/></div>
            <div className='product-detail-info'>
              <p className='name'>{product.title}</p>
              <p className='desc'>{product.description}</p>
              <p className='price'>{product.price}</p>
              <input className='mb-2'onChange={(e)=>setQuantity(e.target.value)} defaultValue={1} type='number' />
              <button onClick={()=>handleCartClick(product._id)} className='card-btn'>Add To Card</button>
            </div>
           
        </div>
        </div>
    );
};

export default ProductDetail;