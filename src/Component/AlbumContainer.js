import React from "react";

import "./AlbumContainer.css";
import Album from "./Album";

/* The function `AlbumContainer` renders a container component that displays a list of albums based on the provided state.*/
function AlbumContainer(props) {
    /* Is using destructuring to extract the`state` and `setState` properties from the `props` object. */
    const { state, setState } = props;

    /*If the `state` array is empty, it returns a `<h1>` element with the text "Loading...". Otherwise, 
    it returns a `<div>` element with the class name "AlbumContainer" and maps over the `state` array to 
    render multiple `<Album>` components.*/
    if (state.length === 0) {
        return <h1 className="loading">Loading...</h1>;
    } else {
        return (
            <div className="AlbumContainer">
                {/*The code is using the `map` function to iterate over each element in the `state` array. 
                For each element, it is creating a new `<Album>` component with the following props: */}
                {state.map((currAlbum, index) => (
                    <Album
                        state={state}
                        setState={setState}
                        albumUser={currAlbum.userId}
                        photoNo={currAlbum.id}
                        pos={index + 1}
                        title={currAlbum.title}
                        key={index}
                    />
                ))}
            </div>
        );
    }
}

export default AlbumContainer;
