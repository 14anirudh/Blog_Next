import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const slug = (props) => {
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
        <div>{display && display.content}</div>
      </main>
    </div>
  );
};
export async function getServerSideProps(context) {
  // const router = useRouter();
  // console.log(context);
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let blog = await data.json();
  return {
    props: { blog }, // will be passed to the page component as props
  };
}

export default slug;
