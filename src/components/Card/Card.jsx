import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

const Card = ({ image, title }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <img src={image} alt={title} className={styles.cardImage} />
        <div className={styles.cardContent}>
          <div className={styles.chipWrapper}>
            <Chip label="100 Follows" className={styles.chip} />
          </div>
        </div>
      </div>
      <p className={styles.cardTitle}>{title}</p>
    </div>
  );
};

export default Card;
