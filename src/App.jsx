import React, { useEffect, useState } from 'react';
import { getPokemon, getPokemonDetails } from './services/pokemonService';
import PokemonCard from './PokemonCard';
import SearchBar from './SearchBar';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemon(50);
      const detailedPokemon = await Promise.all(
        data.map((pokemon) => getPokemonDetails(pokemon.url))
      );
      setPokemonList(detailedPokemon);
      setFilteredPokemon(detailedPokemon);
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    const filtered = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemon(filtered);
  }, [searchTerm, pokemonList]);

  return (
    <div>
      <div className="App">
      <h1>Pokémon List</h1>
      <SearchBar onSearch={setSearchTerm} />
      <div className="pokemon-container">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
