import React from 'react';
import reactDom from 'react-dom';
import Header from  '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/footer';
import BikeList from '../components/Bikes/BikeList';

function Home() {
    return (
    
        <div>
             <Header />
             <NavBar />
           
          <BikeList />
          <Footer />
          
        </div>
       
    )
    
    }
    
    
    






export default Home;