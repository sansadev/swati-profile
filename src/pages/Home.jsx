import React from 'react';
import reactDom from 'react-dom';
import Header from  '../components/Header';
import Navbar from '../components/navbar';


function Car(props) {
    return(
        <h2> I am a {props.color} car. </h2>
    )
    }
function Home() {
    return (
    
        <div>
             <Header />
             <Navbar />
           <div> I am Home component</div>
           <div> I am Home component</div>
           <div> I am Home component</div>
           <div> I am Home component</div>
          <Car color="brown" />
        </div>
       
    )
    
    }
    
    
    






export default Home;