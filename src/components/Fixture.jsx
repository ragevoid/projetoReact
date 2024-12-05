import { Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import getFixtures from 'src\servicos\fixturesService.jsx'; // Importe a função criada

const Fixture = () => {
  const [fixtures, setFixtures] = useState([]); // Estado para armazenar os dados
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Inicia o carregamento
        const data = await getFixtures(); // Faz a chamada da API
        setFixtures(data); // Armazena os dados no estado
      } catch (err) {
        setError(err.message || 'Erro ao buscar dados da API.'); // Captura erro
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Carregando dados...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <h1>Próximos Jogos</h1>
      {fixtures.length > 0 ? (
        fixtures.map((fixture) => (
          <div key={fixture.fixture.id}>
            <p>
              <strong>Jogo:</strong> {fixture.teams.home.name} vs {fixture.teams.away.name}
            </p>
            <p>
              <strong>Data:</strong> {new Date(fixture.fixture.date).toLocaleString()}
            </p>
          </div>
        ))
      ) : (
        <p>Não há jogos disponíveis.</p>
      )}
    </div>
  );
};

export default Fixture;