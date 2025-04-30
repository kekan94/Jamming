import React, { useCallback } from 'react';

import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props) {

    const handleNameChange = useCallback((event) => {
        props.onNameChange(event.target.value);
    }, [props.onNameChange])

    return (
        <div className='playlist'>
            <input onChange={handleNameChange} placeholder="New Playlist" />
            <Tracklist
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />
            <button id="saveButton" onClick={props.onSave}>
                Save To Spotify
            </button>
        </div>
    )
}

export default Playlist;