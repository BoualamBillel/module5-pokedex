import { useState } from "react"
import iconeRecherche from "../../assets/icone-recherche-pokemon.png"
import "./SearchBar.css"

function SearchBar({ onPokemonFound }) {

    const [searchTerm, setSearchTerm] = useState("");
    const handleClick = async () => {
        const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${searchTerm}`);
        if (response.ok) {
            const data = await response.json();
            onPokemonFound(data);
        }
    }

    return (
        <div className="search-bar">
            <img onClick={handleClick} src={iconeRecherche} alt="" className="search-icon" />
            <input type="text" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} placeholder="Rechercher un Pokémon"/>
        </div>
    );
}

export default SearchBar;