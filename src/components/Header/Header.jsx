import React from 'react';
import reactDom from 'react-dom';
import classes from './Header.css';




function Header() {
    return(
        
        <div className="header-top text-white d-flex p-5 row ">
        
        
        <div className='col-sm-3'>
            
            <img className='rectangular header-logo' src="images/bike.png" alt="logo" />
        </div>
        <div className='col-sm-6'>
            <h3 className='header-text'>Best Bikes Of The World</h3>
        </div>
        <div className='col-sm-3'>
            <input type="text" className='header-search-box' placeholder='Search...' />
        </div>
        
        </div>
        
        
    )
}

export default Header;