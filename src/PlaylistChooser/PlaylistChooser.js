import React, { useState } from 'react';

/*Importovati vec postojece playliste*/

function PlaylistChooser({style, id}) {
    const [playlist, setPlaylist] = useState(["Pop", "Metal", "Narodnjaci", "Rock"]);

    function handleClick({target}) {
        /*const newDisplay = {display: relative};
        setDisplay(newDisplay);*/ 
        const newPlaylist = target.value;
        setPlaylist(newPlaylist);
    }

    return (
        <div className="playlistChooser" style={style} id={id}>
            <h3>Choose a playlist</h3>
            <ul>
                {playlist.map(playlist => (
                    <li>{playlist.name}</li>
                ))}
            </ul>
            <button value={playlist} onClick={handleClick}>Create a new playlist</button>
        </div>
    )
}

export default PlaylistChooser;