import React, { useState, useEffect } from 'react';
import './DateForm.scss';

const DateForm = () => {
  const [destination, setDestination] = React.useState();
  const [dataIda, setDataIda] = React.useState();
  const [dataVolta, setDataVolta] = React.useState();
  const [pessoas, setPessoas] = React.useState();

  const myChangeHandlerDestination = (event) => {
    setDestination(event.target.value);
  };

  const myChangeHandlerDataIda = (event) => {
    setDataIda(event.target.value);
  };

  const myChangeHandlerDataVolta = (event) => {
    setDataVolta(event.target.value);
  };

  const myChangeHandlerPessoas = (event) => {
    setPessoas(event.target.value);
  };

  const sendForm = () => {
    const requestOptions = {
      method: 'POST',
      header: { 'Content-Type': ' application/json' },
      body: JSON.stringify({
        destino: destination,
        dataIda: dataIda,
        dataVolta: dataVolta,
        pessoas: pessoas,
      }),
    };
    console.log(requestOptions);
    fetch('http://localhost:3000/agendamentos', requestOptions).then(
      (response) => response.json(),
    );
  };

  return (
    <div className="date-form-container">
      <div className="form">
        <p>Reserve uma viagem na velocidade da luz</p>
        <div className="inputs-container">
          <div className="destination-input">
            <label htmlFor="destinationInput">Destino</label>
            <input
              type="text"
              id="destinationInput"
              placeholder="Insira um destino ou hospedagem."
              onChange={myChangeHandlerDestination}
            />
          </div>
          <div className="date-input">
            <label htmlFor="entryInput">Datas (entrada e saída)</label>
            <div className="dates">
              <input
                type="date"
                id="entryInput"
                placeholder="Entrada"
                onChange={myChangeHandlerDataIda}
              />
              <input
                type="date"
                id="leftInput"
                placeholder="Saída"
                onChange={myChangeHandlerDataVolta}
              />
            </div>
          </div>
          <div className="person-inputs">
            <label htmlFor="personInput">N° Pessoas</label>
            <input
              type="number"
              id="personInput"
              placeholder="Pessoas"
              onChange={myChangeHandlerPessoas}
            />
          </div>
          <button type="submit" onClick={sendForm}>
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateForm;
