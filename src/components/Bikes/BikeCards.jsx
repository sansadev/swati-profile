import { Card } from 'react-bootstrap';
import './card.scss';
import BikeData from './bikeMenuApi'
import { useState } from 'react';


const BikeCards = () => {
   
 const [bikeCardData, setBikeCardData] =  useState(BikeData);
  console.log(bikeCardData);
  
  return (
    
   
      <div className='container-fluid bike-list'>
        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./images/bike-main-page.jpg" alt="this is a bike image" />
      <Card.Body>
        <Card.Title>Mountain Bike</Card.Title>
        <Card.Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, vitae. Quibusdam ducimus mollitia laudantium autem.
        </Card.Text>
        
      </Card.Body>
    </Card>
    
      </div>
    
    );
}

export default BikeCards;