import React from 'react';
import LogoStarTravel from '../../img/Logo-StarTravel.png';
import './header.scss';

const Header = () => {
  return (
    <div className="headerContainer">
      <img src={LogoStarTravel} alt="Logo Star Travel" />
      <ul>
        <li>
          <a href="#destinos">Destinos</a>
        </li>
        <li>
          <a href="#hospedagens">Hospedagens</a>{' '}
        </li>
        <li>
          <a href="#pacotes">Pacotes</a>
        </li>
        <li>
          <a href="#naves">Naves</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
