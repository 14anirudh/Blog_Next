import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import * as fs from "fs";

const Slug = (props) => {
  function createMarkup(c) {
    return {__html:c};
  }
  const [display, setDisplay] = useState(props.blog);
  // const router = useRouter();
  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setDisplay(data);
  //       console.log(data);
  //     });
  // }, [router.isReady]);
  // router is not ready
  // when router.isReady changes useEffect will run again
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{display && display.title}</h1>
        <hr />
        {display && <div dangerouslySetInnerHTML={createMarkup(display.content)}></div>}
      </main>
    </div>
  );
};

//SERVER SIDE RENDERING
//  export async function getServerSideProps(context) {
//    // const router = useRouter();
//    // console.log(context);
//    const { slug } = context.query;
//    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//    let blog = await data.json();
//    return {
//      props: { blog }, // will be passed to the page component as props
//    };
//  }

//STATIC SITE GENERATION

//get static path to tell next how many pages to be generated through slug.js
 export async function getStaticPaths() {
   return {
     paths: [
     { params: { slug: "How-to-Learn-JavaScript" } },
       { params: { slug: "How-to-Learn-ReactJS" } },
       { params: { slug: "How-to-Learn-Next" } },
     ],
     fallback: false, // can also be true or 'blocking'
   };
 }
 //get static props to get the props
 export async function getStaticProps(context) {
   const { slug } = context.params;
   let blog = await fs.promises.readFile(`blogData/${slug}.json`, "utf-8");
   return {
     props: { blog: JSON.parse(blog) }, // will be passed to the page component as props
   };
 }

export default Slug;
