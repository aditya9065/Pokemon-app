import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemon = async (limit = 50) => {
  try {
    const response = await axios.get(`${API_URL}?limit=${limit}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    return [];
  }
};

export const getPokemonDetails = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon details:', error);
  }
};
