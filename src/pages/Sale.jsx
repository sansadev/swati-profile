import React from 'react';
import reactDom from 'react-dom';
import Header from  '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/footer';
import Api from '../components/Api.js';

const Sale = () => {
    return (
        <>
           <Header />
       <NavBar />
      
       <div>
        <h2>Sale Content should go here</h2>
       </div>
       <Api />
       <Footer />
        </>
    )
}


export default Sale;