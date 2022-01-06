import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css'

const SideDrawer = ({show}) => {
    const sideDrawerClass=['side_drawer']
    if(show){
        sideDrawerClass.push('showSideDrawer')
    }
   
    return (
        <div className={sideDrawerClass.join(" ")}>
            <div className='side_drawer_menu'>
            <Link to='/home'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/signin'>Sign In</Link>
            </div>
            
        </div>
    );
};

export default SideDrawer;