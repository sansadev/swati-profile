  import React from 'react';
  import reactDom from 'react-dom';
  import './Header.scss';



  function Header() {
      return(
          
    <header className='container-fluid mt-1 p-5 bg-warning text-white d-flex justify-content-around'>
        
       <img className="headerLogo" src="images/bike.png" alt="logo" />
       <h3 className='p-4'>Online Bike Store</h3>
       <input type="text" className='btn mb-2 p-3' placeholder='Search...' />
       
       
    </header>
      )
  }

  export default Header;