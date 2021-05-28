import React, { useEffect } from 'react';
import './MyTravels.scss';
import axios from 'axios';

const MyTravels = () => {
  const [agendamentos, setAgendamentos] = React.useState([]);
  

  useEffect(() => {
    fetch('http://localhost:3000/agendamentos')
      .then((res) => res.json())
      .then((result) => {
        setAgendamentos(result);
      });
  }, []);

  return (
    <div className="my-travels-container">
        <h1>
          <span id="agendamentos">Confira a data</span> das suas aventuras
        </h1>
        {agendamentos.length < 1 &&
            <p className="noAppointments">Você não tem agendamentos ;(</p>
        }
        {agendamentos.length > 0 &&
            <>
                {agendamentos.map((item)=>{
                    return(
                        <div className="appointmentCard">
                            <div className="itemsHolder">
                                <p>Destino</p>
                                <p>{item.destino}</p>
                            </div>
                            <div className="itemsHolder">
                                <p>Data da ida</p>
                                <p>{item.dataIda}</p>
                            </div>
                            <div className="itemsHolder">
                                <p>Data da volta</p>
                                <p>{item.dataVolta}</p>
                            </div>
                            <div className="itemsHolder">
                                <p>Número de pessoas</p>
                                <p>{item.pessoas}</p>
                            </div>
                        </div>
                    )  
                })}
            </>
        }
    </div>
  );
};

export default MyTravels;
