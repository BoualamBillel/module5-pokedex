import Pokemon from "../pokemon/Pokemon";
import "./PokemonList.css";

function PokemonList({ pokemonsArray, onPokemonClick }) {
    return (
        <div className="pokemon-list-container">
            {pokemonsArray.map(pokemon => (
                <Pokemon
                key={pokemon.id}
                pokemon={pokemon}
                onPokemonClick={onPokemonClick} />
            ))}
        </div>
    )
}

export default PokemonList;