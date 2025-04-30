import React, { useCallback } from "react";

import "./Track.css";

function Track(props) {
    const addTrack = useCallback(event => {
        props.onAdd(props.track);
    }, [props.onAdd, props.track]);

    const removeTrack = useCallback(event => {
        props.onRemove(props.track);
    }, [props.onRemove, props.track]);

    const renderAction = () => {
        if (props.isRemoval) {
            return (
                <button className="TrackAction" onClick={removeTrack}>
                    -
                </button>
            );
        } else {
            return (
                <button className="TrackAction" onClick={addTrack}>
                    +
                </button>
            )
        }
    }

    return (
        <div className="track">
            <div className="trackInfo">
                <h3><a href={props.track.url} target="_blank">{props.track.name}</a></h3>
                <p>{props.track.artist} <span className="line">|</span> {props.track.album}</p>
            </div>
            {renderAction()}
        </div>
    )
}

export default Track;