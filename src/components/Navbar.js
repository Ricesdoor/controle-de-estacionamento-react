import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/reservar">Cadastrar Reserva</Link>
        </li>
        <li>
          <Link to="/vagas">Listar Vagas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;