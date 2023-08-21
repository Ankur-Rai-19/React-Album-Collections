import React, { useState, useEffect } from "react";
import { Route, Routes as Switch } from "react-router-dom";

import Navbar from "./Component/Navbar";
import AlbumContainer from "./Component/AlbumContainer";
import CreateAlbum from "./Component/CreateAlbum";
import UpdateAlbum from "./Component/UpdateAlbum";

// API_URL = "https://jsonplaceholder.typicode.com/albums";

function App() {
    const [state, setState] = useState([]);

    /* The `useEffect` hook is used to fetch data from the API and update the state of the component. */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/albums"
                );

                const jsonData = await response.json();
                setState(jsonData);
                console.log(jsonData);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            <Navbar />

            {/* The `Switch` component is used to render only the first `Route` that matches the current location. */}
            <Switch>
                <Route
                    path="/"
                    element={
                        <AlbumContainer state={state} setState={setState} />
                    }
                />
                <Route
                    path="/createAlbum"
                    element={<CreateAlbum state={state} setState={setState} />}
                />
                <Route
                    path="/update-album/:pos"
                    element={<UpdateAlbum state={state} setState={setState} />}
                />
            </Switch>
        </div>
    );
}

export default App;
