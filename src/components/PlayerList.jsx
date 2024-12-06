import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';

const PlayerList = ({ players, setPlayers }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  // Função para fechar o modal
  const handleClose = () => {
    setShowModal(false);
    setCurrentPlayer(null);
  };

  // Função para abrir o modal
  const handleShow = (player) => {
    setCurrentPlayer(player || null);
    setShowModal(true);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newPlayer = {
      id: currentPlayer ? currentPlayer.id : Date.now(),
      name: form.elements.name.value,
      position: form.elements.position.value,
      age: parseInt(form.elements.age.value),
      number: parseInt(form.elements.number.value) || null,
      photo: currentPlayer ? currentPlayer.photo : "https://media.api-sports.io/football/players/306210.png"
    };

    if (currentPlayer) {
      setPlayers(players.map(p => p.id === currentPlayer.id ? newPlayer : p));
    } else {
      setPlayers([...players, newPlayer]);
    }
    handleClose();
  };

  // Função para deletar um jogador
  const handleDelete = (id) => {
    setPlayers(players.filter(p => p.id !== id));
  };

  return (
    <>
      <Row className="mt-3">
        {players.map((player) => (
          <Col key={player.id} lg={3} md={4} sm={12} className="mb-3">
            <Card className="h-100 text-center">
              <Card.Img variant="top" src={player.photo || "https://via.placeholder.com/150"} alt={player.name} />
              <Card.Body>
                <Card.Title>{player.name}</Card.Title>
                <Card.Text>
                  Posição: {player.position}<br />
                  Idade: {player.age}<br />
                  Número: {player.number || 'N/A'}
                </Card.Text>
                <div className="d-flex gap-1 justify-content-center">
                  <Button variant="danger" onClick={() => handleDelete(player.id)}>Deletar</Button>
                  <Button variant="primary" onClick={() => handleShow(player)}>Atualizar</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center mt-3 mb-3">
        <Button variant="primary" onClick={() => handleShow()}>Adicionar Jogador</Button>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{currentPlayer ? 'Atualizar Jogador' : 'Adicionar Jogador'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" name="name" required defaultValue={currentPlayer?.name} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Posição</Form.Label>
              <Form.Control type="text" name="position" required defaultValue={currentPlayer?.position} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Idade</Form.Label>
              <Form.Control type="number" name="age" required defaultValue={currentPlayer?.age} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Número</Form.Label>
              <Form.Control type="number" name="number" defaultValue={currentPlayer?.number || ''} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Fechar</Button>
            <Button variant="primary" type="submit">
              {currentPlayer ? 'Atualizar' : 'Adicionar'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default PlayerList;

