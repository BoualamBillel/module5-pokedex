import Pokemon from "../pokemon/Pokemon";
import "./PokemonList.css";

function PokemonList({ pokemonsArray }) {
    return (
        <div className="pokemon-list-container">
            {pokemonsArray.map(pokemon => (
                <Pokemon pokemon={pokemon} />
            ))}
        </div>
    )
}

export default PokemonList;