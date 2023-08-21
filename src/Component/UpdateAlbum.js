import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./UpdateAlbum.css";

const UpdateAlbum = (props) => {
    /* using the `useParams` hook from the library to extract the value of the `pos` parameter from the URL. */
    const { pos } = useParams();
    const navigate = useNavigate();
    // console.log(props);

    let { state, setState } = props;
    let [newUserId, setNewUserId] = useState("");
    let [newAlbumTitle, setNewAlbumTitle] = useState("");

    /**
     * The `handleSubmit` function is used to handle form submission, update the state, and make a PATCH
     * request to update an album's title and user ID.
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(newUserId);
        // console.log(newAlbumTitle);
        state[pos].userId = newUserId;
        state[pos].title = newAlbumTitle;
        let newState = [...state];
        // console.log(newState);

        /* The `fetch` function is making a PATCH request to the URL */
        fetch(`https://jsonplaceholder.typicode.com/albums/${pos + 1}`, {
            method: "PATCH",
            /* Converting the data object into a JSON string. This is necessary because the `fetch` function
            requires the request body to be a string. */
            body: JSON.stringify({
                title: newAlbumTitle,
                userId: newUserId,
            }),

            /* The `headers` property in the `fetch` function is used to specify the headers of the HTTP request. */
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            /* Handling the response from the PATCH request made to the server. */
            .then((response) => response.json())
            .then((json) => console.log(json));

        setState(newState);
        navigate(`/`);
    };

    return (
        <div className="update-album">
            <form onSubmit={handleSubmit} className="form-field">
                <label>Update User Id :-</label>
                <input
                    placeholder="Enter New UserId"
                    value={newUserId}
                    onChange={(e) => setNewUserId(e.target.value)}
                />
                <label>Update Album Title :-</label>
                <input
                    placeholder="Enter New Album Title"
                    value={newAlbumTitle}
                    onChange={(e) => setNewAlbumTitle(e.target.value)}
                />

                <button type="submit" onClick={handleSubmit}>
                    Save
                </button>
            </form>
        </div>
    );
};

export default UpdateAlbum;
