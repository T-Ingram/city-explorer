import React, { useState } from 'react';
import axios from 'axios';

const CityExplorerForm = () => {
  const [city, setCity] = useState('');
  const [coordinates, setCoordinates] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/', {
        params: {
          access_token: 'pk.47388208f55326d91b21f114be7648b1',
          q: city,
          format: 'json'
        }
      });
      const { features } = response.data;
      if (features.length > 0) {
        const { center } = features[0];
        setCoordinates({ latitude: center[1], longitude: center[0] });
      } else {
        alert('Location not found. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          required
        />
        <button type="submit">Explore!</button>
      </form>
      {coordinates && (
        <div>
          <p>Latitude: {coordinates.latitude}</p>
          <p>Longitude: {coordinates.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default CityExplorerForm;
