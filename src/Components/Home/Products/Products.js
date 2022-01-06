import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Products.css'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../../../Redux/actions/ProductActions';
import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
    const getProducts = useSelector((state) => state.products)
    const { products, loading, error } = getProducts
    const navigate=useNavigate()
    console.log(getProducts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct())
    }, [])

    const handleCardClick=(id)=>{
        navigate(`/products/${id}`)
    }
    return (
        <div>
            <h3 className='section-title'>Latest Products</h3>
            {

             loading ? <h3>loading</h3>: error? <p>{error}</p>:
                <div className='products'>
                    {products?.map(product => {
                        return (
                            <div className='product-card' onClick={()=>handleCardClick(product._id)} key={product.id}>
                                <div className='image'>
                                    <img src={product?.image} />
                                </div>
                                <div className='card-info'>
                                    <p className='card-name'>{product?.title}</p>
                                    <p className='card-desc'>{product?.description.slice(0, 100)}...</p>
                                    <p className='price'> $ {product?.price}</p>
                                    <div className='d-flex justify-content-between mb-3 align-items-end'>
                                        <button className='card-btn'>add to card</button>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>

            }


        </div>
    );
};

export default Products;