import React, {useEffect } from 'react';
import './DateForm.scss';
import axios from 'axios';

const DateForm = () => {
  const [destination, setDestination] = React.useState();
  const [dataIda, setDataIda] = React.useState();
  const [dataVolta, setDataVolta] = React.useState();
  const [pessoas, setPessoas] = React.useState();
  const [destinationOptions, setDestinationOptions] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/destinos')
      .then((res) => res.json())
      .then((result) => {
        setDestinationOptions(result);
      });
  }, []);


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

  console.log(destination, dataIda, dataVolta, pessoas)

  const sendForm = () => {
    axios.post('http://localhost:3000/agendamentos', {
      destino: destination,
      dataIda: dataIda,
      dataVolta: dataVolta,
      pessoas: pessoas,
    }).then(resp => {
      console.log(resp.data)
    })

    window.location.href = '/meus-agendamentos'
  };

  return (
    <div className="date-form-container">
      <div className="form">
        <p>Reserve uma viagem na velocidade da luz</p>
        <div className="inputs-container">
          <div className="destination-input">
            <label htmlFor="destinationSelect">Destino</label>
            <select name="destinationSelect" id="destinationInput" onChange={myChangeHandlerDestination}>
             <option selected disabled>Selecione um destino</option>
             {destinationOptions.map((item) => {
               return(
                  <option name={item.title}>{item.title}</option>
               )
             })}
            </select>
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
            Agendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateForm;
