import React from 'react';
import './Home.scss';
import TravelCard from '../TravelCard/TravelCard';
import JakkuImg from '../../img/JakkuImg.png';

const Home = () => {
  return (
    <div className="home-container">
      <h1>
        <span>Viaje na velocidade da luz</span> para destinos incríveis
      </h1>
      <TravelCard
        category="Destinos"
        title="Jakku"
        description="Absolutamente nada para fazer aqui!"
        flag="Inclui um acompanhante"
        image={JakkuImg}
      />
    </div>
  );
};

export default Home;
