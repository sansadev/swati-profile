import BikeCards from "./BikeCards";
import './card.scss';


const BikeList = () => {
    return (
       <div className="bike-list">
           <h2>Bike Shopping by category</h2>
           <BikeCards />
           <h1>i m not header</h1>
       </div>
    );
}


export default BikeList;
