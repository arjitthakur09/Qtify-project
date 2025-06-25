// src/components/SearchBar/SearchBar.jsx
import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import axios from "axios";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [allSongs, setAllSongs] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  // Fetch songs from API
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get("https://qtify-backend-labs.crio.do/songs");
        setAllSongs(res.data);
      } catch (err) {
        console.error("Error fetching songs:", err);
      }
    };

    fetchSongs();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    const filtered =
      value.trim() === ""
        ? []
        : allSongs.filter((song) =>
            song.title.toLowerCase().includes(value.toLowerCase())
          );

    setFilteredSuggestions(filtered);
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Search a song of your choice"
        value={query}
        onChange={handleChange}
        className={styles.search}
      />
      {filteredSuggestions.length > 0 && (
        <ul className={styles.suggestionList}>
          {filteredSuggestions.map((song) => (
            <li key={song.id} className={styles.suggestionItem}>
              {song.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
