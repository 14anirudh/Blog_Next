import React from 'react'
import { useRouter } from 'next/router'
import styles from "../../styles/BlogPost.module.css";

const slug = () => {
    const router=useRouter();
    const {slug}=router.query;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
     <h1>Title of the Page {slug}</h1>
     <hr />
     <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit at rem quos ipsam, earum maiores consectetur ratione facere voluptate, amet cupiditate, delectus reiciendis!
     </div>
     </main>
    </div>
  )
}

export default slug

