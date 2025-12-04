import Pokemon from "../pokemon/Pokemon"
import { useState, useEffect } from "react";
import "./PokemonDetail.css"

function PokemonDetail({ pokemon, onPokemonClick }) {
    const [pokemonsEvo, setPokemonsEvo] = useState([]);
    const [isPokemonHaveAnEvo, setIsPokemonHasAnEvo] = useState(true);

    useEffect(() => {
        setPokemonsEvo([]);
        setIsPokemonHasAnEvo(true)
        if (pokemon?.apiEvolutions && pokemon.apiEvolutions.length > 0) {
            const fetchAllEvolutions = async () => {
                try {
                    const promises = pokemon.apiEvolutions.map((evo) => {
                        return fetch(`https://pokebuildapi.fr/api/v1/pokemon/${evo.pokedexId}`)
                            .then(res => res.json());

                    });
                    const evolutionsData = await Promise.all(promises);
                    setPokemonsEvo(evolutionsData);
                    console.log(pokemonsEvo);
                } catch (error) {
                    console.error("Une erreur est survenue : ", error);
                }
            }
            fetchAllEvolutions();
        } else {
            setIsPokemonHasAnEvo(false)
        }
    }, [pokemon]);




    return (
        <div className="pokemon-detail-container">
            <div className="pokemon-detail-info">
                <p className="pokemon-id">n°{pokemon.id}</p>
                <img className="pokemon-info-image" src={pokemon.image} alt={`${pokemon.name}-image`} />
                <p className="pokemon-title">{pokemon.name}</p>
                <div className="pokemon-detail-types">
                    <p className="types-title">Types</p>
                    <div className="pokemon-types-img">
                        {pokemon.apiTypes.map((type) => (
                            <img key={type.name} src={type.image} alt={`type ${type.name}-image`}></img>
                        ))}
                    </div>
                </div>
            </div>
            <div className="pokemon-detail-evo">
                <p className="evolutions-title">Evolutions</p>
                {pokemonsEvo.map((evoPokemon) => (
                    <Pokemon key={evoPokemon.id} pokemon={evoPokemon} onPokemonClick={onPokemonClick} />
                ))}
                {isPokemonHaveAnEvo === false && <p className="no-evolution-message">Ce pokémon ne dispose d'aucune évolution !</p>}
            </div>
        </div>
    )
}

export default PokemonDetail;