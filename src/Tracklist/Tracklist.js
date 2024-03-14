import React from "react";

function TrackList {
    return (
        <Track
            track={track}
            key={props.id}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
        />
    )
}

export default TrackList;