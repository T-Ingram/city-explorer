import React, { useState } from 'react';
import axios from 'axios';
import LocationInfo from './LocationInfo';

const API_KEY = import.meta.env.VITE_API_KEY_LOCATIONIQ;

const CityExplorerForm = () => {
  const [city, setCity] = useState('');
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);
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
      setError(null); // Reset error if request succeeds
    } catch (error) {
      console.error('Error fetching location data:', error);
      if (error.response) {
        setError(`Status Code: ${error.response.status}, ${error.response.data.error}`);
      } else {
        setError('Unknown error occurred');
      }
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
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {locationData && <LocationInfo {...locationData} />}
    </div>
  );
};

export default CityExplorerForm;
