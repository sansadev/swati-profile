import React from 'react';
import reactDom from 'react-dom';





function Header() {
    return(
        <div className='container-fluid'>
          <div className="header-top p-5 text-white text-center row">
           
          
           <div className='col-sm-4'>
               
               <img className='rectangular header-logo' src="images/bike.png" alt="logo" />
           </div>
           <div className='col-sm-5'>
               <h3 className='header-text'>Create your imagination build your World</h3>
           </div>
           <div className='col-sm-3'>
              <input type="text" className='header-search-box' placeholder='Search...' />
           </div>
           
        </div>
        </div>
    )
}

export default Header;