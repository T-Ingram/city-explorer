import React from 'react';

const LocationInfo = ({ displayName, latitude, longitude }) => {
  const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${import.meta.env.VITE_API_KEY_LOCATIONIQ}&center=${latitude},${longitude}&zoom=13&size=600x400&format=png`;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Location Details</h5>
        <p className="card-text">City: {displayName}</p>
        <p className="card-text">Latitude: {latitude}</p>
        <p className="card-text">Longitude: {longitude}</p>
        {}
        <img src={mapUrl} alt="Map" className="img-fluid" />
      </div>
    </div>
  );
};

export default LocationInfo;
