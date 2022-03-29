import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const api_key = process.env.REACT_APP_API_KEY;

  const [query, setQuery] = useState("");
  const [artist, setArtist] = useState({});

  // search function to search by artist
  const search = (evt) => {
    fetch(
      `https://api.harvardartmuseums.org/object?yearmade=2002&apikey=${api_key}`
    )
      .then((response) => response.json())
      .then((result) => {
        setArtist(result);
        setQuery("");
        console.log(result);
        console.log(`this is artist${artist}`);
        console.log(`this is query${query}`);
      });
  };

  //given search request, return data (artwork) associated with the artist

  return (
    <div className="App">
      <h1>Our Homepage</h1>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query} //bind value to the query
        />
        <input type="submit" onClick={search} />
      </div>
    </div>
  );
}

export default App;
