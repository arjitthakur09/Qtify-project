// src/components/Logo/Logo.jsx
import React from "react";
import styles from "./Logo.module.css";
import logo from "../../assets/logo.png";

const Logo = () => {
  return <img src={logo} alt="QTify Logo" className={styles.logo} />;
};

export default Logo;
