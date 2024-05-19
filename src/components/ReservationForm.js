import React, { useState } from 'react';

const ReservationForm = ({ addSpot }) => {
  const [formData, setFormData] = useState({
    plate: '',
    owner: '',
    apartmentNumber: '',
    block: '',
    model: '',
    color: '',
    spotNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSpot(formData);
    setFormData({
      plate: '',
      owner: '',
      apartmentNumber: '',
      block: '',
      model: '',
      color: '',
      spotNumber: '',
    });
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="plate" placeholder="Placa do veículo" value={formData.plate} onChange={handleChange} required />
      <input name="owner" placeholder="Nome do proprietário" value={formData.owner} onChange={handleChange} required />
      <input name="apartmentNumber" placeholder="Número do apartamento" value={formData.apartmentNumber} onChange={handleChange} required />
      <input name="block" placeholder="Bloco do apartamento" value={formData.block} onChange={handleChange} required />
      <input name="model" placeholder="Modelo do veículo" value={formData.model} onChange={handleChange} required />
      <input name="color" placeholder="Cor do veículo" value={formData.color} onChange={handleChange} required />
      <input name="spotNumber" placeholder="Número da vaga" value={formData.spotNumber} onChange={handleChange} required />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default ReservationForm;
