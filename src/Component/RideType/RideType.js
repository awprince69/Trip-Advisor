import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './RideType.css'

const RideType = (props) => {
    const { id, name, pic1 } = props.vehicle;
    const history = useHistory();
    const handleClick=()=>{
        history.push(`/search/${name}`)
    }
    return (
        <div className="rideTypeContainer" >
            <Card style={{ width: '18rem' }} onClick={handleClick}>
                <Card.Img variant="top" src={pic1} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RideType;