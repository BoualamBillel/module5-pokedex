import { useState } from "react"
import iconeRecherche from "../../assets/icone-recherche-pokemon.png"
import "./SearchBar.css"

function SearchBar({ onPokemonFound }) {

    const [searchTerm, setSearchTerm] = useState("");
    const handleClick = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${searchTerm}`);
        if (response.ok) {
            const data = await response.json();
            onPokemonFound(data);
        }
    }

    return (
        <div className="search-bar">
            <form action="" onSubmit={handleClick} className="search-form">
            <img onClick={handleClick} src={iconeRecherche} alt="" className="search-icon" />
            <input type="text" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} placeholder="Rechercher un Pokémon"/>
            </form>
        </div>
    );
}

export default SearchBar;