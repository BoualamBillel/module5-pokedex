import Pokemon from "../pokemon/Pokemon"
import { useState, useEffect } from "react";

function PokemonDetail({ pokemon }) {
    const [pokemonsEvo, setPokemonsEvo] = useState([]);

    useEffect(() => {
        setPokemonsEvo([]);
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
        }
    }, [pokemon]);




    return (
        <div className="pokemon-detail-container">
            <div className="pokemon-detail-info">
                <img src={pokemon.image} alt={`${pokemon.name}-image`} />
                <p>{pokemon.name}</p>
                <div className="pokemon-detail-types">
                    <p>Types</p>
                    <div className="pokemon-types-img">
                        {pokemon.apiTypes.map((type) => (
                            <img key={type.name} src={type.image} alt={`type ${type.name}-image`}></img>
                        ))}
                    </div>
                </div>
            </div>
            <div className="pokemon-detail-evo">
                <p>Evolutions</p>
                {pokemonsEvo.map((evoPokemon) => (
                    <Pokemon key={evoPokemon.id} pokemon={evoPokemon} />
                ))}
            </div>
        </div>
    )
}

export default PokemonDetail;