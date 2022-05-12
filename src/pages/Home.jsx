import React from 'react';
import reactDom from 'react-dom';
import Header from  '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/footer';
import BikesList from '../components/Bikes/Bikes';

function Home() {
    return (
    
        <div>
             <Header />
             <NavBar />
           <div> I am Home component</div>
           <div> I am Home component</div>
           <div> I am Home component</div>
           <div> I am Home component</div>
          <BikesList />
          <Footer />
          
        </div>
       
    )
    
    }
    
    
    






export default Home;