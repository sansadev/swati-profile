import React from 'react';
import reactDom from 'react-dom';
import Header from  '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/footer';

function BikeParts() {
    return (
       <>
       <Header />
       <NavBar />
       <div>
        <h2>BikeParts Content should go here</h2>
       </div>
       <Footer />
       </>
    )
}
export default BikeParts;