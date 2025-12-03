import { useState } from "react"

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
            <input type="text" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
            <button onClick={handleClick}>Rechercher</button>
        </div>
    );
}

export default SearchBar;