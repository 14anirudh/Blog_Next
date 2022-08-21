import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

function blog() {
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDisplay(data);
        console.log(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {display.map((items) => {
          return (
            <div key={items.slug}>
              <Link href={`BlogPost/${items.slug}`}>
                <h3 className={styles.blogItemh3}>{items.title}</h3>
              </Link>
              <p className={styles.blogItemp}>
                {items.content.substr(0, 200) + "..."}
                <Link href={`BlogPost/${items.slug}`}>
                  <button className={styles.blogbtn}>Read more</button>
                </Link>
              </p>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default blog;
