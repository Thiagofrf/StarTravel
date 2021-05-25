import React from 'react';
import './TravelCard.scss';

const TravelCard = ({ image, category, title, description, flag }) => {
  return (
    <div className="card-container">
      <img src={image} alt="Destino" />
      <p>{category}</p>
      <p>{title}</p>
      <p>{description}</p>
      <span>{flag}</span>
    </div>
  );
};

export default TravelCard;
