
import './card.scss';
import { Container,Card,Row,Col } from 'react-bootstrap';


const BikeList = ({ bikeData }) => {
             console.log(bikeData);
    return (
    
     <>
     <Container>
    <Row>
    {bikeData.map((num) => {
          return (
            <Col sm={6} md={4} lg={4} gap={3} className="mt-3 mb-3">
        <Card className="mb-2 border border-dark">
        <Card.Img variant="top" src={num.img} alt="this is a bike image" />
        <Card.Body>
        <Card.Title>{num.title}</Card.Title>
        <Card.Text>{num.para}</Card.Text>
        </Card.Body>
        
        </Card>
            
            </Col>
           
    )
    
      })}
    
    </Row>
  
      </Container>
     </>
      
    );
}


export default BikeList;
