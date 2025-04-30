import React, { useState, useCallback } from 'react';
import './SearchBar.css';
import { FaMagnifyingGlass } from 'react-icons/fa6';

function SearchBar(props) {
    const [searchBarValue, setSearchBarValue] = useState('');

    const handleInput = (event) => {
        event.preventDefault();
        const newSearch = event.target.value;
        setSearchBarValue(newSearch);
    };

    const search = useCallback(() => {
        props.onSearch(searchBarValue);
    }, [props.onSearch, searchBarValue]);

    return (
        <p className="paragraph">
            <input name="search" placeholder="Enter A Song Title/Artist" type="text" value={searchBarValue} onChange={handleInput}></input>
            <button onClick={search}><FaMagnifyingGlass /></button>
        </p>
    )
}

export default SearchBar;