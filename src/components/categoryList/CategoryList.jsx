import React from 'react'
import styles from './categoryList.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { NextResponse } from 'next/server'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-store',
  });

  if (!res.ok) {
    return new Error("failed");
  }
  return res.json();
}

export const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data.map((item) => (
          <Link href={`/blog?cat=${item.slug}`} className={`${styles.category} ${styles[item.slug]}`} key={item._id}>
            <Image src={item.img} alt='img' width={32} height={32} className={styles.image} />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
};
