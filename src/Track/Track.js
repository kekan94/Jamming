import React from "react";
import "./Track.css";

const tracks = [
    {name: "Lose Yourself",
    artist: "Eminem",
    album:  "Lose Yourself",
    id: "1"},
    {name: "Not Afraid",
    artist: "Eminem",
    album:  "Lose Yourself",
    id: "2"},
    {name: "Down to the Ground",
    artist: "Eminem",
    album:  "Obnoxious",
    id: "3"},
    {name: "Old Yella",
    artist: "McDonald",
    album:  "Farm",
    id: "4"},
    {name: "Womanizer",
    artist: "Britney Spears",
    album:  "Baby One More Time",
    id: "5"},
    {name: "Baby One More Time",
    artist: "Britney Spears",
    album:  "Baby One More Time",
    id: "6"},
]

function Track(props) {
    return (
        <div className="track">
            {tracks.map(track => (
                <>
                    <h3>{track.name}</h3>
                    <p>
                        {track.artist} | {track.album}
                        <span>
                            <button /*onAdd={handleChange}*/>
                                Add the song to Playlist
                                <select>
                                    <option>Playlist 1</option>
                                    <option>Playlist 2</option>
                                </select>
                            </button>
                        </span>
                    </p>
                </>
            ))
            }
        </div>
    );
}

export default Track;