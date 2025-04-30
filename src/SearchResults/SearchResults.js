import React from "react";

import './SearchResults.css';
import Tracklist from "../Tracklist/Tracklist";

function SearchResults(props) {
    return (
        <div className="searchResults">
            <h2><span className="highlight">S</span>earch <span className="highlight">R</span>esults</h2>
            <Tracklist tracks={props.searchResults} onAdd={props.onAdd}/>
        </div>
    )
}

export default SearchResults;