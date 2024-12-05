import axios from 'axios';

const API_HOST = 'https://v3.football.api-sports.io';
const API_KEY = '83303917d80ac4e0dad6d309eabe233e';


const apiClient = axios.create({
  baseURL: API_HOST,
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': API_KEY,
  },
});

export default apiClient;