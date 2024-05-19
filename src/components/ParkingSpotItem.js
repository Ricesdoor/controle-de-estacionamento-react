import React from 'react';

const ParkingSpotItem = ({ spot, removeSpot }) => {
  return (
    <div>
      <h3>Vaga {spot.spotNumber}</h3>
      <p>Placa: {spot.plate}</p>
      <p>Proprietário: {spot.owner}</p>
      <p>Apartamento: {spot.apartmentNumber} - Bloco: {spot.block}</p>
      <p>Modelo: {spot.model} - Cor: {spot.color}</p>
      <button onClick={removeSpot}>Remover</button>
    </div>
  );
};

export default ParkingSpotItem;
