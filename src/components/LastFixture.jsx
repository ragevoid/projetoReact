import React from 'react';
import { Card } from 'react-bootstrap';

const LastFixtureDisplay = ({ lastFixture }) => {
    if (!lastFixture || !lastFixture.teams || !lastFixture.fixture || !lastFixture.league) {
      return null;
    }

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
    <Card className="h-100 border-0 shadow-sm">
      <Card.Body className="d-flex flex-column justify-content-center align-items-center gap-3">
        {/* Logos e nomes dos times */}
        <div className="d-flex justify-content-between gap-5 align-items-center">
          <img src={lastFixture.teams.home.logo} alt="Time da casa" width="50" id="home" />
          <div className="text-center">
            <p className="m-0">VS</p>
            <p className="m-0">{`${lastFixture.goals.home} - ${lastFixture.goals.away}`}</p>
          </div>
          <img src={lastFixture.teams.away.logo} alt="Time visitante" width="50" id="visit" />
        </div>
        {/* Informações gerais */}
        <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title mb-1">{`${lastFixture.teams.home.name} vs ${lastFixture.teams.away.name}`}</h5>
          <p className="card-text mb-1 text-muted">{`Estádio: ${lastFixture.fixture.venue.name || 'Desconhecido'}`}</p>
          <p className="card-text mb-1 text-muted">{`Data e Hora: ${formatDate(lastFixture.fixture.date)}`}</p>
          <p className="card-text text-muted">{`Status: ${lastFixture.fixture.status.long}`}</p>
        </div>
        {/* Detalhes da Liga */}
        <div className="d-flex flex-column align-items-center">
          <img src={lastFixture.league.logo} alt="Logo da liga" width="40" />
          <p className="m-0 text-muted">{`${lastFixture.league.name} (${lastFixture.league.round})`}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default LastFixtureDisplay;