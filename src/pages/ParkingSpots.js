import React from 'react';
import ParkingSpotList from '../components/ParkingSpotList';

const ParkingSpots = ({ spots, removeSpot }) => {
  return (
    <div>
      <h1>Vagas Cadastradas</h1>
      <ParkingSpotList spots={spots} removeSpot={removeSpot} />
    </div>
  );
};

export default ParkingSpots;
