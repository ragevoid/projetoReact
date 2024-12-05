import React from 'react';
import { Container } from 'react-bootstrap';

function TeamInfo() {
  return (
    <Container className="d-flex justify-content-center flex-column align-items-center gap-3">
      <div className="d-flex justify-content-center align-items-center gap-3">
        <img src="src\assets\img\mengao.png" alt="Logo Flamengo" width="50" />
        <h2 className="m-0">Clube de Regatas do Flamengo</h2>
      </div>
    </Container>
  );
};

export default TeamInfo;

