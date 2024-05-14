import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Kiran Shrestha here!</b> Discover my latest blogs and articles.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="img" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta perferendis a maiores, porro inventore voluptatibus molestias quas corrupti doloribus illo! Corporis quos repellendus fuga qui autem! Repellat, cumque doloremque! Aliquid?</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}
