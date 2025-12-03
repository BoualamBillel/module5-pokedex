import { useEffect, useState } from 'react'
import './App.css'
import PokemonDetail from './components/pokemonDetail/PokemonDetail'
import PokemonList from './components/pokemonList/PokemonList'
import SearchBar from './components/searchBar/SearchBar'

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100");
      if (response.ok) {
        const allPokemons = await response.json();
        console.log(allPokemons);
        setPokemons(allPokemons);
      }
    }
    fetchData();
  }, [])

  const handlePokemonClick = (pokemonFromList) => {
    setSelectedPokemon(pokemonFromList);
  };

  return (
    <div className='main-content'>
      <section className='pokemon-list'>
        <PokemonList pokemonsArray={pokemons} onPokemonClick={handlePokemonClick} />
      </section>
      <section className='pokemon-detail'>
        <SearchBar onPokemonFound={setSelectedPokemon} />
        {selectedPokemon && <PokemonDetail pokemon={selectedPokemon} />}
      </section>
    </div>
  )
}

export default App
