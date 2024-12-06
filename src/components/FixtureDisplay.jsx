import React from 'react';
import { Card } from 'react-bootstrap';

const FixtureDisplay = ({ fixture }) => {
  if (!fixture) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      timeZone: 'America/Sao_Paulo' 
    };
    return new Intl.DateTimeFormat('pt-BR', options).format(date);
  };

  return (
    <Card className="h-100  border-0" >
      <Card.Body className="d-flex flex-column justify-content-center align-items-center gap-3">
        <div className="me-3 d-flex justify-content-between gap-5 align-items-center">
          <img src={fixture.teams.home.logo} alt="time da casa" width="50" id="home" />
          <p>VS</p>
          <img src={fixture.teams.away.logo} alt="time visitante" width="50" id="visit" />
        </div>
        <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title mb-1">{`${fixture.teams.home.name} vs ${fixture.teams.away.name}`}</h5>
          <div className="d-flex flex-column align-items-center">
            <p className="card-text mb-1 text-muted">{`Estádio: ${fixture.fixture.venue.name}`}</p>
            <p className="card-text mb-0 text-muted">{`Data e Hora: ${formatDate(fixture.fixture.date)}`}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FixtureDisplay;

