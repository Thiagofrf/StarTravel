import React from 'react';
import './TravelCard.scss';

const TravelCard = ({ image, category, title, description, flag }) => {
  return (
    <div className="card-container">
      <img src={require('../../img' + image).default} alt="Destino" />
      <p className="category">{category}</p>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <span className="flag">
        <p>{flag}</p>
      </span>
    </div>
  );
};

export default TravelCard;
