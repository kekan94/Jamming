import React, { useState } from "react";

import "./Tracklist.css";
import Track from "../Track/Track";

function Tracklist(props) {
    return (
        <div className="trackList">
            {props.tracks.map(track => {
                return (
                    <Track
                        track={track}
                        key={track.id}
                        onAdd={props.onAdd}
                        isRemoval={props.isRemoval}
                        onRemove={props.onRemove}
                    />
                )
            })}
        </div>
    )
}

export default Tracklist;