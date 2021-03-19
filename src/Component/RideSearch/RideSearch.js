import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/MOCK_DATA.json'
import './RideSearch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'


const RideSearch = () => {
    const { rideName } = useParams();
    const rides = fakeData.find(ride => ride.name === rideName)
    const { pic1, name } = rides
    const [searchedArea, setSearchedArea] = useState(false)
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        setSearchedArea(data)
    };

    return (
        <div className="d-flex justify-content-between container">
            <div className="searchForm">
                {
                    !searchedArea &&
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <h5>Pickup Location</h5>
                            <input name="pickUp" ref={register({ required: true })} />
                            {errors.pickUp && <span className='error'>This pickup location is required</span>}
                            <h5>Drop Location</h5>
                            <input name="drop" ref={register({ required: true })} />
                            {errors.drop && <span className='error'>This drop location is required</span>}
                            <input type="submit" value="Search" />
                        </form>
                    </div>
                }
                {
                    searchedArea &&
                    <div className="rideLocation">
                        <h1 >{searchedArea.pickUp.toUpperCase()}</h1>
                        <h1>{searchedArea.drop.toUpperCase()}</h1>
                    </div>
                }
                {searchedArea &&
                    <div>
                        <div className="card mb-3 mt-3" style={{ width: "300px" }}>
                            <div className="row g-0">
                                <div className="col-md-4 vehicle">
                                    <img src={pic1} alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body d-flex justify-content-between">
                                        <h5 className="card-title">{name} <FontAwesomeIcon icon={faUserFriends}/> 4</h5>
                                        <p className="card-text"><small>$127</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" style={{ width: "300px" }}>
                            <div className="row g-0">
                                <div className="col-md-4 vehicle">
                                    <img src={pic1} alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body d-flex justify-content-between">
                                        <h5 className="card-title">{name} <FontAwesomeIcon icon={faUserFriends}/> 4 </h5>
                                        <p className="card-text"><small>$127</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" style={{ width: "300px" }}>
                            <div className="row g-0">
                                <div className="col-md-4 vehicle">
                                    <img src={pic1} alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body d-flex justify-content-between">
                                        <h5 className="card-title">{name} <FontAwesomeIcon icon={faUserFriends}/> 4</h5>
                                        <p className="card-text"><small>$127</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            map

        </div>
    );
};

export default RideSearch;