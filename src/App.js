import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SideDrawer from './Components/Header/SideDrawer/SideDrawer';
import BackDrop from './Components/Header/Backdrop/BackDrop';
import { useState } from 'react';
import Home from './Components/Home/Home';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Cart from './Components/Cart/Cart';

function App() {
  const [sideToggle,setSideToggle]=useState(false)
  return (
   <BrowserRouter>
   <Header click={()=> setSideToggle(true)}></Header>
   <SideDrawer show={sideToggle}></SideDrawer >
   <BackDrop  show={sideToggle} click={()=>setSideToggle(false)}></BackDrop>
   
   <Routes>
   <Route path='/' element={<Home></Home>}></Route>
   <Route path='/home' element={<Home></Home>}></Route>
   <Route path='products/:id' element={<ProductDetail></ProductDetail>}></Route>
   <Route path='/cart' element={<Cart></Cart>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
