import React from 'react';
import reactDom from 'react-dom';
import classes from './Header.module.css';




function Header() {
    return(
        
      <header className={classes.headerTop}>
           <div className='text-white d-flex p-5 row'>
          
       
          <div className='col-sm-6'>
          
          <img className={classes.headerLogo} src="images/bike.png" alt="logo" />
      </div>
      
          
      
      <div className='col-sm-6'>
          <input type="text" className='header-search-box' placeholder='Search...' />
      
      </div>
    
      </div>
      </header>
    )
}

export default Header;