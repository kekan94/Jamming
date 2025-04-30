import React, { useState, useCallback } from 'react';
import './ArtistChooser.css';
import { FaMagnifyingGlass } from 'react-icons/fa6';

function ArtistChooser(props) {
    const [searchArtistValue, setSearchArtistValue] = useState('');

    const handleInput = (event) => {
        event.preventDefault();
        const newSearch = event.target.value;
        setSearchArtistValue(newSearch);
    };

    const searchArtist = useCallback(() => {
        props.onSearch(searchArtistValue);
        const artistDiv = document.getElementById('artist');
        artistDiv.style.display = 'none';
    }, [props.onSearch, searchArtistValue]);

    return (
        <div id="artist">
            <p className="paragraph" id="artist">
                <input name="searchArtist" placeholder="Enter Your Favorite Artist" type="text" value={searchArtistValue} onChange={handleInput}></input>
                <button onClick={searchArtist}><FaMagnifyingGlass /></button>
            </p>
        </div>
    )
}

export default ArtistChooser;