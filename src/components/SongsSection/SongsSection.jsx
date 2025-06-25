import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import styles from "./SongsSection.module.css";

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [songsRes, genresRes] = await Promise.all([
          axios.get("https://qtify-backend-labs.crio.do/songs"),
          axios.get("https://qtify-backend-labs.crio.do/genres"),
        ]);
        setSongs(songsRes.data);
        setGenres([{ label: "All" }, ...genresRes.data]);
      } catch (err) {
        console.error("Error fetching songs/genres:", err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs =
    selectedGenre === "All"
      ? songs
      : songs.filter((song) => song.genre.label === selectedGenre);

  return (
    <div className={styles.songsSection}>
      <h2>Songs</h2>
      <Tabs
        value={selectedGenre}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        className={styles.tabs}
      >
        {genres.map((genre) => (
          <Tab
            key={genre.label}
            label={genre.label}
            value={genre.label}
            className={styles.tab}
          />
        ))}
      </Tabs>

      <Carousel
        data={filteredSongs}
        renderComponent={(song) => (
          <Card
            key={song.id}
            image={song.image}
            title={song.title}
            likes={song.likes} // show likes instead of follows
          />
        )}
      />
    </div>
  );
};

export default SongsSection;