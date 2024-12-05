


async function getPLayers() {
  try {
    // Fazendo a requisição
    const response = await apiClient.get('/squads', {
      params: { team: 127}, // Parâmetros da URL
    });

    // Verificando resposta
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.data.response || []; // Retorna os dados
  } catch (error) {
    console.error('Error fetching fixtures:', error.message);
    return []; // Retorna array vazio em caso de erro
  }
}

export default getPLayers;