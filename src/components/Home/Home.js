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
      <div className="travel-card-carousel">
        <TravelCard
          category="Destinos"
          title="Viaje para Jakku"
          description="Absolutamente nada para fazer aqui!"
          flag="Inclui um acompanhante"
          image={JakkuImg}
        />
        <TravelCard
          category="Destinos"
          title="Viaje para Jakku"
          description="Absolutamente nada para fazer aqui!"
          flag="Inclui um acompanhante"
          image={JakkuImg}
        />
        <TravelCard
          category="Destinos"
          title="Viaje para Jakku"
          description="Absolutamente nada para fazer aqui!"
          flag="Inclui um acompanhante"
          image={JakkuImg}
        />
        <TravelCard
          category="Destinos"
          title="Viaje para Jakku"
          description="Absolutamente nada para fazer aqui!"
          flag="Inclui um acompanhante"
          image={JakkuImg}
        />
      </div>
    </div>
  );
};

export default Home;
