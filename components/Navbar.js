import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Twirl as Hamburger } from "hamburger-react";
import Hamburger_menu from "./Hamburger_menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.mainnav}>
      <ul className={styles.nav_ul}>
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
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <Hamburger color="#4FD1C5" />
      </div>
      {open && <Hamburger_menu />}
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
