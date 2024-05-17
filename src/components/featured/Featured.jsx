import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'
import Link from 'next/link';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/featured', {
    cache: 'no-store'

  })

  return res.json();
};

export const Featured = async () => {
  const datas = await getData();

  const readPost = () => {

  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Kiran Shrestha here!</b> Discover my latest blogs and articles.
      </h1>
      {datas?.map((data) => (
        <div className={styles.post}>
          {data.img &&
            <div className={styles.imgContainer}>
              <Image src={data?.img} alt="img" fill className={styles.image} />
            </div>
          }

          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>{data.title}</h1>
            <p className={styles.postDesc}>
              {data.desc.split(" ").slice(0, 20).join(" ")}...
            </p>
            {/* <button className={styles.button} onClick={readPost}>Read More</button> */}
            <Link href={`/posts/${data.slug}`} className={styles.link}>Read More</Link>
          </div>
        </div>
      ))}

    </div>
  )
}
