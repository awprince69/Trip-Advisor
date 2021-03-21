import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/MOCK_DATA.json'
import './RideSearch.css'
import SearchDetails from '../SearchDetails/SearchDetails';
import Map from '../Map/Map';


const RideSearch = () => {
    const { rideName } = useParams();
    const rides = fakeData.find(ride => ride.name === rideName)
    return (
        <div className="container destination">
            <div>
                <SearchDetails rides={rides}></SearchDetails>
            </div>
            <div className="map">
                <Map></Map>
           </div>

        </div>
    );
};

export default RideSearch;