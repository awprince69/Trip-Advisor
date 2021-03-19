import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import vehicle from '../../fakeData/MOCK_DATA.json'
import RideType from '../RideType/RideType';
import './Home.css'

const Home = () => {
    const [vehicles, setVehicles] = useState([])
    useEffect(() => {
        setVehicles(vehicle)
    }, [])
    return (
        <div className="homeBackground displayImage">
            {
                vehicles.map(vehicle => <RideType vehicle={vehicle } key={vehicle.id}></RideType>)
            }

        </div>
    );
};

export default Home;