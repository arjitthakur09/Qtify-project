// src/components/Navbar/Navbar.jsx
import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Button from "../Button/Button.jsx";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Logo />
      </div>
      <div className={styles.center}>
        <SearchBar />
      </div>
      <div className={styles.right}>
        <Button>Give Feedback</Button>
      </div>
    </div>
  );
};

export default Navbar;
