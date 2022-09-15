import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Twirl as Hamburger } from "hamburger-react";
import Footer from "./Footer";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <nav className={styles.mainnav}>
      <Link href="/">
        <img className={styles.logo} src="/navlogo.png" alt="random image" />
      </Link>

      <ul className={styles.nav_ul}>
        <Link href="/">
          <li>
            <p className={styles.ul_element}>Home</p>
          </li>
        </Link>
        <Link href="/blog">
          <li>
            <p className={styles.ul_element}>Blogs</p>
          </li>
        </Link>
        <Link href="/about">
          <li>
            <p className={styles.ul_element}>About</p>
          </li>
        </Link>
        <Link href="/contact">
          <li>
            <p className={styles.ul_element}>Contact</p>
          </li>
        </Link>
      </ul>
      <div className={styles.hamburger} onClick={handleClick}>
        <Hamburger color="#f5e8da" />
        <img src="/navlogo.png" alt="logo" className="w-32 ml-20 " />
      </div>
      {open && (
        <div className={styles.menu}>
          <div className={styles.menu_inner}>
            <ul className={styles.menu_nav}>
              <Link href="/">
                <li onClick={handleClick}>
                  <a>Home</a>
                </li>
              </Link>
              <Link href="/blog">
                <li onClick={handleClick}>
                  <a>Blogs</a>
                </li>
              </Link>
              <Link href="/about">
                <li onClick={handleClick}>
                  <a>About</a>
                </li>
              </Link>
              <Link href="/contact">
                <li onClick={handleClick}>
                  <a>Contact</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
/*<div class="menu">
                <div class="menu-inner">
                  <ul class="menu-nav">
                    <li class="menu-nav-item">
                      <a class="menu-nav-link" href="#">
                        <span>
                          <div>Home</div>
                        </span>
                      </a>
                    </li>
                    <li class="menu-nav-item">
                      <a class="menu-nav-link" href="#">
                        <span>
                          <div>About</div>
                        </span>
                      </a>
                    </li>
                    <li class="menu-nav-item">
                      <a class="menu-nav-link" href="#">
                        <span>
                          <div>Service</div>
                        </span>
                      </a>
                    </li>
                    <li class="menu-nav-item">
                      <a class="menu-nav-link" href="#">
                        <span>
                          <div>Team</div>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>*/
