import React from 'react';
import CityExplorerForm from './components/CityExplorerForm';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className="city-explorer-form">
        <div className="form-container">
          <CityExplorerForm />
        </div>
        <div className="map-container">
          {}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
