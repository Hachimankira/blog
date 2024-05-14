import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from './menuposts.module.css'

export const MenuPosts = ({ withImage }) => {
    return (
        <div className={styles.items}>
        <Link href="/blog?cat=style" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='img' fill className={styles.image}/>
          </div>
          )}
          
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
              Food
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
            <div className={styles.detail}>
            <span className=''>John Doe</span>
            <span className={styles.date}> - 11.03.2025</span>
            </div>
          </div>
        </Link>
      </div>
    );
}
