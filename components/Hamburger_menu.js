import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Hamburger_menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu_inner}>
        <ul className={styles.menu_nav}>
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/blog">
          <li>Blogs</li>
        </a>
        <a href="/about">
          <li>About</li>
        </a>
        <a href="/contact">
          <li>Contact</li>
        </a>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger_menu;
