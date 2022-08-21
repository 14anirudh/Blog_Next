import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

function blog(props) {
  console.log(props);
  const [display, setDisplay] = useState(props.allBlogs);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setDisplay(data);
  //       console.log(data);
  //     });
  // }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {display.map((items) => {
          return (
            <div key={items.slug}>
              <Link href={`BlogPost/${items.slug}`}>
                <h1 className={styles.blogItemHead}>{items.title}</h1>
              </Link>
              <p className={styles.blogItemP}>
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
export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();

  return {
    props:{allBlogs}, // will be passed to the page component as props
  };
}

export default blog;
