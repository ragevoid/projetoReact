import axios from 'axios';

const API_HOST = 'https://v3.football.api-sports.io';
const API_KEY = '83303917d80ac4e0dad6d309eabe233e';

export const fetchPlayers = async () => {
  try {
    const response = await axios.get(`${API_HOST}/players/squads?team=127`, {
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': API_KEY
      }
    });
    return response.data.response[0].players || [];
  } catch (error) {
    console.error('Erro ao buscar jogadores:', error);
    return [];
  }
};

export const fetchFixtures = async () => {
  try {
    const response = await axios.get(`${API_HOST}/fixtures?team=127&next=1`, {
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': API_KEY
      }
    });
    return response.data.response[0] || null;
  } catch (error) {
    console.error('Erro ao buscar partidas:', error);
    return null;
  }
};

