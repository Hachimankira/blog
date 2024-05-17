import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from './menuposts.module.css'

export const MenuPosts = ({ withImage, posts }) => {
  if (!posts) {
    return null; // or return some placeholder content
  }

  const datas = posts;
  return (

    <div className={styles.items}>
      {datas.map((post) => (
        <Link href="/blog?cat=style" className={styles.item}>
          {withImage && post?.image && (
            <div className={styles.imageContainer}>
              <Image src={post?.image}alt='img' fill className={styles.image} />
            </div>
          )}

          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
            {post?.catSlug}
            </span>
            <h3 className={styles.postTitle}>{post?.title}</h3>
            <div className={styles.detail}>
              <span className=''>{post?.user?.name}</span>
              <span className={styles.date}> - {post?.createdAt}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>

  );
}
