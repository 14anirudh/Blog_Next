import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from 'fs';

function Blog(props) {
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
  let myfile;
  let allBlogs=[];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    // console.log(item);
    myfile = await fs.promises.readFile(("blogData/" + item),"utf-8");
    allBlogs.push(JSON.parse(myfile))
  }

   return {
     props:{allBlogs}, // will be passed to the page component as props
   };
}

export default Blog;
