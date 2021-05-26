import React, { useEffect } from 'react';
import './Home.scss';
import TravelCard from '../TravelCard/TravelCard';
import JakkuImg from '../../img/JakkuImg.png';
import MustafarImg from '../../img/mustafar.jpg';
import NabooImg from '../../img/naboo.jpg';
import CoruscantImg from '../../img/coruscant.jpg';
import { render } from '@testing-library/react';

const Home = () => {
  const [destinations, setDestinations] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/destinos')
      .then((res) => res.json())
      .then((result) => {
        setDestinations(result);
      });
  }, []);

  console.log('destinos', destinations);
  return (
    <div className="home-container">
      <h1>
        <span>Viaje na velocidade da luz</span> para destinos incríveis
      </h1>
      <div className="travel-card-carousel">
        {destinations.map((item) => {
          return (
            <TravelCard
              category={item.category}
              title={item.title}
              description={item.description}
              flag={item.flag}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
