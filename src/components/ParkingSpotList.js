import React from 'react';
import ParkingSpotItem from './ParkingSpotItem';

const ParkingSpotList = ({ spots, removeSpot }) => {
  return (
    <div>
      {spots.map((spot, index) => (
        <ParkingSpotItem key={index} spot={spot} removeSpot={() => removeSpot(index)} />
      ))}
    </div>
  );
};

export default ParkingSpotList;
