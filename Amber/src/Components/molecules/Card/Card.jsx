import './Card.scss';

/* required props :
     image 
     name
     price
     driverName
     numberPlate
     arrivalTime
*/
const Card = (props) => {

    console.log(`pickup address: ${props.pickupAddress} `);


    return(
        <div className={`card ${props.className}`} onClick={props.onClick}>
            <img className="ambulance-image" src={props.image} alt="ambulance" />
            <div className="data">
                <h3 className="car-name">{props.name}</h3>
                <p className="price">{props.price}</p>
            </div>
        </div>
    )
}

export default Card;