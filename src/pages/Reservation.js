import React, { useState } from 'react';
import ReservationForm from '../components/ReservationForm';

const Reservation = ({ addSpot }) => {
  return (
    <div>
      <h1>Cadastro de Reserva</h1>
      <ReservationForm addSpot={addSpot} />
    </div>
  );
};

export default Reservation;
