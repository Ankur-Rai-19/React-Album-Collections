import React from "react";
import { Link } from "react-router-dom";

import "./Album.css";

function Album(props) {
    /* Is using object destructuring to extract specific properties from the `props` object. */
    const { photoNo, title, albumUser, state, setState, pos } = props;

    /* The `handleDelete` function deletes an element from the `state` array and sends a DELETE request to a JSON API.*/
    const handleDelete = (e) => {
        const index = e.target.dataset.index - 1;
        state.splice(index, 1);
        let newState = [...state];
        fetch(`https://jsonplaceholder.typicode.com/albums/${photoNo}`, {
            method: "DELETE",
        });
        setState(newState);
    };

    return (
        <div className="album">
            <div className="albumdetails">
                <h4 className="header">
                    Album User - <span>{albumUser}</span>
                </h4>
                <h4 className="header">
                    PhotoNo - <span>{photoNo}</span>{" "}
                </h4>
                <h4 className="header">
                    Title - <span>{title}</span>
                </h4>
            </div>

            <div className="btn-ctn">
                {/* UPDATE */}
                <Link to={`/update-album/${pos - 1}`}>
                    <button id="update" data-index={pos}>
                        Update
                    </button>
                </Link>

                {/* DELETE */}
                <Link to="/">
                    <button id="delete" data-index={pos} onClick={handleDelete}>
                        Delete
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default Album;
