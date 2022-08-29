import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Hamburger_menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu_inner}>
        <ul className={styles.menu_nav}>
        <Link href="/">
          <li ><a>Home</a></li>
        </Link>
        <Link href="/blog">
          <li><a>Blogs</a></li>
        </Link>
        <Link href="/about">
          <li><a>About</a></li>
        </Link>
        <Link href="/contact">
          <li><a>Contact</a></li>
        </Link>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger_menu;
