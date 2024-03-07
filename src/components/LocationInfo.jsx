import React from 'react';

const LocationInfo = ({ displayName, latitude, longitude }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Location Details</h5>
        <p className="card-text">City: {displayName}</p>
        <p className="card-text">Latitude: {latitude}</p>
        <p className="card-text">Longitude: {longitude}</p>
      </div>
    </div>
  );
};

export default LocationInfo;
