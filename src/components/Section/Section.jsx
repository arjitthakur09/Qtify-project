import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, fetchURL, isSongSection = false }) => {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(fetchURL);
        setAlbums(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [fetchURL]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        {!isSongSection && (
          <button
            className={styles.toggleBtn}
            onClick={() => setIsCollapsed((prev) => !prev)}
          >
            {isCollapsed ? "Show All" : "Collapse"}
          </button>
        )}
      </div>

      {isCollapsed && !isSongSection ? (
        <Carousel
          data={albums}
          renderComponent={(item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              follows={item.follows}
              type="album" // 👈 VERY IMPORTANT
            />
          )}
        />
      ) : (
        <div className={styles.cardGrid}>
          {albums.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              follows={item.follows}
              type="album" // 👈 VERY IMPORTANT
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
