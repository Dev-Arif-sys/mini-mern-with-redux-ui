import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import './Header.css'

const Header = ({click}) => {
  const cartItem=useSelector(state=>state.cart.CartItem)
  const navigate=useNavigate()
  const cartItemCount=cartItem.reduce((quantity,item)=> cartItem.length>0? quantity+Number(item.quantity):0,0)
  console.log(cartItemCount)

  const handleClickCart=()=>{
      navigate('/cart')
  }

    return (
        <Navbar bg="dark" variant="dark" className='nav_bar'>
        <Container>
        <Navbar.Brand href="#home" >EMarket</Navbar.Brand>
        <Nav className="ms-auto nav_menu align-items-center ">
        
            <div>
            <div onClick={handleClickCart} className="cart-icon">
                        <i className="fas fa-shopping-cart"></i>
                        <span id="productNum">{cartItemCount}</span>
                      </div>
      
                </div>
            
            
          <Link className='navLink' to='/home'>Home</Link>
          <Link className='navLink'  to='/products'>Products</Link>
          <Link className='navLink'  to='/signin'>Sign In</Link>
        </Nav>
        <Nav className="ms-auto hamBurger_menu">
        <div onClick={handleClickCart} className="cart-icon text-white me-4">
                        <i className="fas fa-shopping-cart me-3"></i>
                        <span id="productNum">{cartItemCount}</span>
                      </div>
                      <div>
                      <i onClick={click} class="fas fa-bars"></i>
                      </div>
       
        </Nav>

        </Container>
      </Navbar>
    
    );
};

export default Header;