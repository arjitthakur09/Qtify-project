import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

const Card = ({ image, title, follows = 0, likes = 0, type }) => {
  const showCount =
    type === "album"
      ? `${follows || 0} Follows`
      : `${likes ? likes : 0} Likes`; // 👈 Safely fallback to 0

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <img src={image} alt={title} className={styles.cardImage} />
        <div className={styles.cardContent}>
          <div className={styles.chipWrapper}>
            <Chip label={showCount} className={styles.chip} />
          </div>
        </div>
      </div>
      <p className={styles.cardTitle}>{title}</p>
    </div>
  );
};



export default Card;
