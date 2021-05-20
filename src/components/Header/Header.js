import React from 'react';
import LogoStarTravel from '../../img/Logo-StarTravel.png';
import './header.scss';

const Header = () => {
  return (
    <div className="headerContainer">
      <img src={LogoStarTravel} alt="Logo Star Travel" />
      <ul>
        <li>Destinos</li>
        <li>Hospedagens</li>
        <li>Pacotes</li>
        <li>Naves</li>
      </ul>
    </div>
  );
};

export default Header;
