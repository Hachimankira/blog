import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from './menuposts.module.css'

const trendings = async () => {
    const res = await fetch(`http://localhost:3000/api/menu/trending`, {
        cache: 'no-store',
    });
  
    // if (!res.ok) {
    //   throw new Error("Failed");
    // }
    return res.json();
  }

  
export const TrendingPosts = async () => {
//   if (!trendingsDatas) {
//     return null; // or return some placeholder content
//   }
    const trendingsDatas = await trendings();
  return (
    <div className={styles.items}>

      {trendingsDatas.map((post) => (
        <Link href={`/blog?cat=${post.category}`} className={styles.item} key={post.id}>
          {/* {withImage && (
            <div className={styles.imageContainer}>
              <Image src={post.image} alt='img' fill className={styles.image} />
            </div>
          )} */}

          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[post.catSlug]}`}>
              {post.catSlug}
            </span>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <div className={styles.detail}>
              <span className=''>{post.user.name}</span>
              <span className={styles.date}> - {new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
