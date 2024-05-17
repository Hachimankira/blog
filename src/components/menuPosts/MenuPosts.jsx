import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from './menuposts.module.css'


export const MenuPosts = ({ posts }) => {
  if (!posts) {
    return null; // or return some placeholder content
  }
  const datas = posts;
  return (
    <div className={styles.items}>
      {datas.map((post) => (
        <Link href={`/posts/${post.slug}`} className={styles.item} key={post.id}>
          {
            post.img && (
              <div className={styles.imageContainer}>
                <Image src={post.img} alt='img' fill className={styles.image} />
              </div>
            )
          }

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
