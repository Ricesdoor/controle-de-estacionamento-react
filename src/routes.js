import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Reservation from './pages/Reservation';
import ParkingSpots from './pages/ParkingSpots';
import Navbar from './components/Navbar';

const AppRoutes = () => {
  const [spots, setSpots] = useState([]);

  const addSpot = (spot) => {
    setSpots([...spots, spot]);
  };

  const removeSpot = (index) => {
    setSpots(spots.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/reservar" element={<Reservation addSpot={addSpot} />} />
        <Route path="/vagas" element={<ParkingSpots spots={spots} removeSpot={removeSpot} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
