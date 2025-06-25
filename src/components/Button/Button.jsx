// src/components/Button/Button.jsx
import React from "react";
import styles from "./Button.module.css";

const Button = ({ children }) => {
  return <button className={styles.feedbackBtn}>{children}</button>;
};

export default Button;

