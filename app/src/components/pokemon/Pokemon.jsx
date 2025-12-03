import "./Pokemon.css"
function Pokemon({ pokemon }) {

    return (
        <div className="pokemon-card">
            <div className="pokemon-info">
                <p>{pokemon.id}</p>
                <p>{pokemon.name}</p>
            </div>
            <div className="pokemon-image">
                <img src={pokemon.image} alt="image-pokemon" />
            </div>

        </div>
    );
}

export default Pokemon;