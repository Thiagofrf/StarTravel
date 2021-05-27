import React, { useEffect } from 'react';
import './Home.scss';
import TravelCard from '../TravelCard/TravelCard';
import DateForm from '../DateForm/DateForm';

const Home = () => {
  const [destinations, setDestinations] = React.useState([]);
  const [hospedagens, setHospedagens] = React.useState([]);
  const [pacotes, setPacotes] = React.useState([]);
  const [naves, setNaves] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/destinos')
      .then((res) => res.json())
      .then((result) => {
        setDestinations(result);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/hospedagens')
      .then((res) => res.json())
      .then((result) => {
        setHospedagens(result);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/pacotes')
      .then((res) => res.json())
      .then((result) => {
        setPacotes(result);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/naves')
      .then((res) => res.json())
      .then((result) => {
        setNaves(result);
      });
  }, []);

  return (
    <>
      <DateForm />
      <div className="home-container">
        <h1>
          <span id="destinos">Viaje na velocidade da luz</span> para destinos
          incríveis
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
                key={item.id}
              />
            );
          })}
        </div>
        <h1>
          <span id="hospedagens">Encontre a hospedagem ideal</span> para sua
          jornada
        </h1>
        <div className="travel-card-carousel">
          {hospedagens.map((item) => {
            return (
              <TravelCard
                category={item.category}
                title={item.title}
                description={item.description}
                flag={item.flag}
                image={item.image}
                key={item.id}
              />
            );
          })}
        </div>
        <h1>
          <span id="pacotes">Compre seu pacotes dos sonhos</span> e aproveite ao
          máximo sua aventura Jedi
        </h1>
        <div className="travel-card-carousel">
          {pacotes.map((item) => {
            return (
              <TravelCard
                category={item.category}
                title={item.title}
                description={item.description}
                flag={item.flag}
                image={item.image}
                key={item.id}
              />
            );
          })}
        </div>
        <h1>
          <span id="naves">Viaje com as melhores naves</span> para o seu
          objetivo
        </h1>
        <div className="travel-card-carousel">
          {naves.map((item) => {
            return (
              <TravelCard
                category={item.category}
                title={item.title}
                description={item.description}
                flag={item.flag}
                image={item.image}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
