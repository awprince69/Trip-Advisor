import React from 'react';
import {GoogleMap, LoadScript } from '@react-google-maps/api';
const containerStyle = {
    width: "800px",
    height: '550px',
};

const center = {
    lat: 23.777176,
    lng: 90.399452
};
const Map = () => {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyAF_aoTsE3r3tbRZhBhwFVqsFHLz96ZZBI">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;