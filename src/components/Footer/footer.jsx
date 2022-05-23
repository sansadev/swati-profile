
import './Footer.scss';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { BsFillChatFill } from 'react-icons/bs';
import { BsFillEnvelopeOpenFill } from 'react-icons/bs';




    const Footer = () => {
        return (

      
    <footer>
        
       <div className='container'>
         <div className='row'>
             {/* {first column of footer} */}
           <div className='col-md-4 footer-column'>
           <ul className='nav flex-column'>
               <li className='nav-item'>
               <span class="footer-title">Product</span>
               </li>
               <li className='nav-item'>
                <a  className="nav-link" href="#">mountain Bikes1</a>
               </li>
               <li className='nav-item'>
               <a  className="nav-link" href="#">mountain Bikes2</a>
               </li>
               <li className='nav-item'>
               <a  className="nav-link" href="#">mountain Bikes3</a>
               </li>
               <li className='nav-item'>
               <a  className="nav-link" href="#">mountain Bikes4</a>
               </li>
           </ul>
           </div>


           <div className='col-md-4 footer-column'>
           <ul className='nav flex-column'>
               <li className='nav-item'>
               <span class="footer-title">Company</span>
               </li>
               <li className='nav-item'>
                <a  className="nav-link" href="#">About Us</a>
               </li>
               <li className='nav-item'>
               <a  className="nav-link" href="#">Bikes repair</a>
               </li>
               <li className='nav-item'>
               <a  className="nav-link" href="#">News And Article</a>
               </li>
            </ul>
           </div>


           <div className='col-md-4 footer-column'>
           <ul className='nav flex-column'>
               <li className='nav-item'>
               <span class="footer-title">Contact and support</span>
               </li>
               <li className='nav-item'>
                <span className='nav-link'> <BsTelephoneOutboundFill />  +123 456 7891</span>
               </li>
               <li className='nav-item'>
               <a  className="nav-link" href="#"><BsFillChatFill />  Live chat</a>
               </li>
               <li className='nav-item'>
               <a  className="nav-link" href="#"><BsFillEnvelopeOpenFill />  Contact us</a>
               </li>
               <li className='nav-item'>
               <a  className="nav-link" href="#"> feedback</a>
               </li>
            </ul>
           </div>





         </div>
       </div>
    </footer>
      


        )
    }

    export default Footer;