import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TeamInfo from '../components/TeamInfo';
import FixtureDisplay from '../components/FixtureDisplay';
import PlayerList from '../components/PlayerList';
import { fetchPlayers, fetchFixtures } from '../api';

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [fixture, setFixture] = useState(null);
  const [showPlayerList, setShowPlayerList] = useState(false);


  // Efeito para carregar os dados quando o componente for montado
  useEffect(() => {
    const loadData = async () => {
      const playersData = await fetchPlayers();
      setPlayers(playersData);
      const fixtureData = await fetchFixtures();
      setFixture(fixtureData);
    };
    loadData();
  }, []);

  return (
    <Container>
      <Row>
        <Col md={6} className='d-flex'>
          <TeamInfo />
        </Col>
        <Col md={6}>
          <FixtureDisplay fixture={fixture} />
        </Col>
      </Row>
      <div className="container position-relative" style={{ height: '300px', overflow: 'hidden' }}>
        <img
          src="src\assets\img\vamos.jpg"
          alt="Imagem de exemplo"
          className="position-absolute top-50 start-50 translate-middle w-100"
          style={{ objectFit: 'cover', maxHeight: '300px' }}
        />
      </div>
      <div className="container d-flex justify-content-center align-items-center mt-1" id="buttons">
        <Button
          variant="danger"
          size="lg"
          className="col-6"
          onClick={() => setShowPlayerList(!showPlayerList)}
        >
          {showPlayerList ? 'Esconder Time' : 'Conhecer o Time'}
        </Button>
      </div>
      {showPlayerList && <PlayerList players={players} setPlayers={setPlayers} />}
    </Container>
  );
};

export default Home;

