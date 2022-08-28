import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Hamburger_menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu_inner}>
        <ul className={styles.menu_nav}>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/blog">
          <li>Blogs</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger_menu;
