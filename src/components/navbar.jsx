import React from 'react';


    function Navbar() {
        return(
            
                
            <nav className='navbar navbar-expand-sm bg-dark'>
              <div className="container-fluid text-center">
              <ul className='navbar navbar-expand-sm'>
                     
                     <li className='nav-item'>
                         <a className='nav-link  text-white' href="#">Bike Accessories</a>
                     </li>
                     <li className='nav-item'>
                         <a  className='nav-link  text-white' href="#">Bike Parts</a>
                     </li>
                     <li className='nav-item'>
                         <a className='nav-link  text-white' href="#">Sale</a>
                     </li>
                     <li className='nav-item'>
                         <a className='nav-link  text-white' href="#">Blog</a>
                     </li>
                    
                 </ul>
                

              </div>
        </nav>
           
        )
    }

    export default Navbar;
