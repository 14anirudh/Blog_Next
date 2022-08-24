import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

function Blog(props) {
  const [display, setDisplay] = useState(props.allBlogs);
  const [count, setcount] = useState(2);
  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
    setcount(count + 2);
    let data = await d.json();
    setDisplay(data);
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={display.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allcount !== display.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {display.map((items) => {
            return (
              <div key={items.slug}>
                <Link href={`BlogPost/${items.slug}`}>
                  <h1 className={styles.blogItemHead}>{items.title}</h1>
                </Link>
                <p className={styles.blogItemP}>
                  {items.metadesc.substr(0, 200) + "..."}
                  <Link href={`BlogPost/${items.slug}`}>
                    <button className={styles.blogbtn}>Read more</button>
                  </Link>
                </p>
              </div>
            );
          })}
        </InfiniteScroll>
        {/* {display.map((items) => {
          return (
            <div key={items.slug}>
              <Link href={`BlogPost/${items.slug}`}>
                <h1 className={styles.blogItemHead}>{items.title}</h1>
              </Link>
              <p className={styles.blogItemP}>
                {items.metadesc.substr(0, 200) + "..."}
                <Link href={`BlogPost/${items.slug}`}>
                  <button className={styles.blogbtn}>Read more</button>
                </Link>
              </p>
            </div>
          );
        })} */}
      </main>
    </div>
  );
}

//SERVER SIDE RENDERING
// export async function getServerSideProps(context) {
//   let data = await fetch("http://localhost:3000/api/blogs");
//   let allBlogs = await data.json();

//   return {
//     props:{allBlogs}, // will be passed to the page component as props
//   };
// }

//STATIC SITE GENERATION
export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogData");
  let allcount = data.length;
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < 2; index++) {
    const item = data[index];
    // console.log(item);
    myfile = await fs.promises.readFile("blogData/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs, allcount }, // will be passed to the page component as props
  };
}

export default Blog;
