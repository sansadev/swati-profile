
import './card.scss';
import { useState } from 'react';
import BikeList from './BikeList';
import Data from "./bikeMenuApi";


const BikeCards = () => {
   
 const [bikeData, setBikeData] =  useState(Data);
  //console.log(bikeData);
  return (
    
   <>
   <BikeList bikeData={bikeData}/>
   </>
     
    
    )
}

export default BikeCards;