import React, { useState } from 'react';
import axios from 'axios';
import LocationInfo from './LocationInfo'; // Import LocationInfo component

const API_KEY = import.meta.env.VITE_API_KEY_LOCATIONIQ;

const CityExplorerForm = () => {
  const [city, setCity] = useState('');
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${city}&format=json`);
      const data = response.data[0];
      setLocationData({
        displayName: data.display_name,
        latitude: data.lat,
        longitude: data.lon
      });
    } catch (error) {
      console.error('Error fetching location data:', error);
    }
    setLoading(false);
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
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Explore!'}
        </button>
      </form>
      {locationData && <LocationInfo {...locationData} />} {/* Render LocationInfo component */}
    </div>
  );
};

export default CityExplorerForm;
